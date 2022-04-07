<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // User::factory(10)->create();

        if (Course::count() < 1) {
            // make demo courses for this test with a short youtube video vimeo_id to play course
            $courses = [
                ['course_title' => 'Chemistry',
                    'course_code' => 101,
                    'vimeo_id' => '32561497'
                ],
                ['course_title' => 'Data Science',
                    'course_code' => 102,
                    'vimeo_id' => '344418211'
                ],
                ['course_title' => 'Statistics',
                    'course_code' => 103,
                    'vimeo_id' => '74654793'
                ],
                ['course_title' => 'Computer Networking',
                    'course_code' => 104,
                    'vimeo_id' => '173462384'
                ],
                ['course_title' => 'Python Language',
                    'course_code' => 105,
                    'vimeo_id' => '69563313'
                ],
            ];
            foreach ($courses as $course) {
                Course::create([
                    'course_title' => $course['course_title'],
                    'course_code' => $course['course_code'],
                    'vimeo_id' => $course['vimeo_id']
                ]);
            }

        }
        if (User::count() < 1) {
            User::factory()->count(10)->create();
        }
        if (Student::count() < 1) {
            Student::factory()->count(10)->create();
        }
    }
}
