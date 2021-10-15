<?php

namespace App\Models\Traits;

trait Searchable
{
    protected function fullTextWildcards($term)
    {
        $reservedSymbols = ['-', '+', '<', '>', '@', '(', ')', '~', '*'];
        $term = str_replace($reservedSymbols, '', $term);
        $words = explode(' ', $term);
        foreach($words as $key => $word) {
            if(strlen($word) > 0) {
                $words[$key] = '+' . $word . '*';
            }
        }
        $searchTerm = implode(' ', $words);
        return $searchTerm;
    }

    public function scopeSearch($query, $term)
    {
        $columns = implode(',', $this->searchable);
        $searchableTerm = $this->fullTextWildcards($term);
 
        $query->selectRaw("MATCH ({$columns}) AGAINST (? IN BOOLEAN MODE) AS relevance_score", [$searchableTerm])->whereRaw("MATCH ({$columns}) AGAINST (? IN BOOLEAN MODE)", $searchableTerm)->orderByDesc('relevance_score');
    }

    public function scopeSimpleSearch($query, $term)
    {
        $query->where(function($query) use ($term) {
            foreach ($this->searchable as $i => $column) {
                if ($i == 0) $query->where($column, 'LIKE', "%$term%");
                else $query->orWhere($column, 'LIKE', "%$term%");
            }
        });
    }
}