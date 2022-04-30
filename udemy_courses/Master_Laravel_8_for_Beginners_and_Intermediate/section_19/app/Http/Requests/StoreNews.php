<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNews extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'         => 'required|min:5',
            'author'        => ['bail', 'required', 'min:5', 'max:100'],
            'publishedAt'   => ['required'],
            'urlToImage'    => ['required', 'min:10'],
            'content'       => ['required', 'min:10'],
        ];
    }
}
