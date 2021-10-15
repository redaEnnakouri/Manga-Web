<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 4,
                'username' => 'VJain8905',
                'email' => 'vj@hh.com',
                'role' => 'admin',
                'password' => '$2y$10$YIfRyC8LJkbB9bWU9EiG9eqtz2b1jAnU2RHmkxUlp28er60J2/1t6',
                //'remember_token' => NULL,
                'created_at' => '2019-01-02 19:11:41',
                'updated_at' => '2019-01-15 18:48:06',
            ),
        ));
        
        
    }
}