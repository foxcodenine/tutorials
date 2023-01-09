<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
        return [
            'id' => $this->id,
            'content'       => $this->content,
            'create_at'     => $this->created_at,
            // 'user'       => [ 'id' => $this->user->id, 'name ' => $this->user->name,] 
            // 'user'       => new CommentUserResource($this->user)
            'user'          => new CommentUserResource($this->whenLoaded( 'user' ))
        ];
    }
}
