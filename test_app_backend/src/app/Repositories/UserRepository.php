<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;

class UserRepository extends CoreRepository implements UserRepositoryInterface
{
    public function __construct()
    {
        parent::__construct(new \App\Models\User());
    }

}
