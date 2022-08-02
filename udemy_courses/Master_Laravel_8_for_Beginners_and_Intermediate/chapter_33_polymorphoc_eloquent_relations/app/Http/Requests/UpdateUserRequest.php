<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => ['required', 'min:5'],
            'avatar' => [
                'bail',
                'image',
                'min:10', 
                'max:1000', 
                'mimes:jpg,bmp,png,webp',
                'dimensions:min_height=100,min_with=100,ratio=1/1',      
            ],   
        ];
    }
}
