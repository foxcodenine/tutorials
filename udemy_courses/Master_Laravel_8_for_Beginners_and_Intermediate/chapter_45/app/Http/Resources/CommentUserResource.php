<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CommentUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // ~~> UPDATED:
        // return parent::toArray($request);

        
        // ~~> TO:
        // dd(Auth::user());
        
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            // 'email' => $this->when(Auth::user()?->is_admin, $this->email)
        ];

    }
}
