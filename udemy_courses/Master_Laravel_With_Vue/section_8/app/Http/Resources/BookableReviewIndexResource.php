<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookableReviewIndexResource extends JsonResource
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
            'created_at' =>$this->created_at,
            'rating' =>$this->rating,
            'content' => $this->content
        ];
    }
}
