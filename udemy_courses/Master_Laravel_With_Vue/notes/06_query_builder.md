


### The latest & oldest Methods

The latest and oldest methods allow you to easily order results by date. 
By default, the result will be ordered by the table's created_at column. 
Or, you may pass the column name that you wish to sort by:

    $user = DB::table('users')
                    ->latest()
                    ->first();