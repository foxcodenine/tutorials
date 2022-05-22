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

            // --- UPDATED:
            // $builder->withTrashed();

            // --- TO:
            // Soft Delete is achieved with SoftDeletingScope 
            // Eliminating it is the same as  using withTrashed()
            // You can use this in any Eloquent query
            $builder->withoutGlobalScope(SoftDeletingScope::class);
        }
    }
}
