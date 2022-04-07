<?php

namespace App\Providers;

use App\Interfaces\CoreRepositoryInterface;
use App\Interfaces\CourseRepositoryInterface;
use App\Interfaces\StudentRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\CoreRepository;
use App\Repositories\CourseRepository;
use App\Repositories\StudentRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CourseRepositoryInterface::class, CourseRepository::class);
        $this->app->bind(CoreRepositoryInterface::class, CoreRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(StudentRepositoryInterface::class, StudentRepository::class);
//        $this->app->bind(\AuthRepositoryInterface::class,\AuthRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
