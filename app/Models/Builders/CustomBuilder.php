<?php

namespace App\Models\Builders;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class CustomBuilder extends Builder
{
    public function paginate($perPage = null, $columns = ['*'], $pageName = 'page', $page = null)
    {
        $page = $page ?: Paginator::resolveCurrentPage($pageName);
        $perPage = $perPage ?: $this->model->getPerPage();
        $results = ($total = $this->getCountForPagination())
                                    ? $this->forPage($page, $perPage)->get($columns)
                                    : $this->model->newCollection();
        return $this->paginator($results, $total, $perPage, $page, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => $pageName,
        ]);
    }

    public function getCountForPagination($columns = ['*'])
    {
        if ($this->toBase()->groups) {
            return DB::table($this->toBase()->cloneWithout(['limit', 'offset', 'orders'])->cloneWithoutBindings(['order']), 'groups')->count();
        }
        return $this->toBase()->cloneWithout(['limit', 'offset', 'orders'])->cloneWithoutBindings(['order'])->count();
    }
}