<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Gustavo',
            'email' => 'gmfreitas@inf.ufsm.br',
            'password' => bcrypt('123456'),
        ]);
        User::create([
            'name' => 'Augusto',
            'email' => 'apfrigo@inf.ufsm.br',
            'password' => bcrypt('batata'),
        ]);
    }
}
