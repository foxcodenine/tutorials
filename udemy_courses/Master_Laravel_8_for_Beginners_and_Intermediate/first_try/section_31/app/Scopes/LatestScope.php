<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class LatestScope implements Scope
{
    /** Will order news_post by create_at in decs order  */

    public function apply(Builder $builder, Model $model)
    {

        // $builder->orderBy('created_at', 'desc');
        $builder->orderBy($model::CREATED_AT, 'desc');
    }
}
