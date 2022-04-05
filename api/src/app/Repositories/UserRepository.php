<?php

class UserRepository extends CoreRepository implements UserRepositoryInterface
{
    public function __construct(\App\Models\User $user)
    {
        parent::__construct($user);
    }

}
