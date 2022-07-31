<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;



class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return false;
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
            'title' => 'bail|required|min:5|max:255',
            'content' => 'required|min:10',   
            // 'image_url' => 'url',   
            'image_file' => [
                'bail',
                'image',
                'min:50', 
                'max:1000', 
                'mimes:jpg,bmp,png,webp',
                'dimensions:min_height=200,min_with=200',
            ],   
        ];
    }

    // https://laravel.com/docs/9.x/validation#rule-confirmed

    // https://laravel.com/docs/9.x/validation#validating-files
}
