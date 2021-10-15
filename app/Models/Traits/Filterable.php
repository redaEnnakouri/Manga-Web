<?php

namespace App\Models\Traits;

use Illuminate\Support\Arr;
use App\Models\Builders\CustomBuilder;

trait Filterable
{
    public function newEloquentBuilder($query)
    {
        return new CustomBuilder($query);
    }

    public function scopeFilter($query, $table, $column, $subject, $values, $group = true)
    {
        if (!$query->getQuery()->columns) $query->select($this->qualifyColumn('*'));
        elseif (!array_intersect([$this->qualifyColumn('*'), $this->qualifyColumn('id')], $query->getQuery()->columns)) $query->addSelect($this->getQualifiedKeyName());
        if (!$values) return;
        $query->join($table, $this->getQualifiedKeyName(), '=', $table.'.'.$column)->whereIn($table.'.'.$subject, Arr::wrap($values));
        if (!($query->getQuery()->groups && in_array($this->getQualifiedKeyName(), $query->getQuery()->groups))) {
            if ($group) $query->groupBy($this->getQualifiedKeyName());
            else $query->distinct($this->getQualifiedKeyName());
        }
    }
}