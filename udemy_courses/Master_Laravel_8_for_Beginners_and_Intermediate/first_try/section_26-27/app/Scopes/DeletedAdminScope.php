<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;

class DeletedAdminScope implements Scope
{
    /** This global scope will dispay soft deleted newsPost to the Admin */

    public function apply(Builder $builder, Model $model)
    {
        if (Auth::check() && Auth::user()->is_admin) {

            // $builder->withTrashed();

            // Soft Delete is acchived with SoftDeletingScope 
            // Eliminated is the same as  using withTrashed()
            $builder->withoutGlobalScope(SoftDeletingScope::class);
        }
    }
}
