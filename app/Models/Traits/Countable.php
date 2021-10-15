<?php

namespace App\Models\Traits;

use Illuminate\Support\Facades\DB;

trait Countable
{
    public function scopeFastCount($query, $name = 'comics_count', $table = 'comic_tags', $column = 'tag_id', $joins = false)
    {
        if (!$query->getQuery()->columns) $query->select();
        if ($joins) {
            $query->selectRaw("COALESCE($name, 0) as $name")->leftJoinSub(DB::table($table)->select($column, DB::raw("COUNT(*) AS $name"))->groupBy($column), $table, function ($join) use ($table, $column) {
                $join->on($this->getQualifiedKeyName(), '=', "$table.$column");
            });
        } else {
            $query->selectRaw("(select count(*) from $table where ".$this->getQualifiedKeyName()." = $table.$column) as $name");
        }
    }
}