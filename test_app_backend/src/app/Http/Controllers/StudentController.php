<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Repositories\StudentRepository;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    protected $repo;

    public function __construct(StudentRepository $repository)
    {
        $this->repo = $repository;
    }

    public function index()
    {
        return new StudentResource($this->repo->allRaw()->select(["id", "course_id", "firstname", "lastname", "gender", "email", "status", "created_at"])->with('course')->paginate(20));
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json($this->repo->show($id, ['course']));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        return response()->json($this->repo->create($request->all()));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        return response()->json($this->repo->update($id, $request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        return response()->json($this->repo->delete($id));
    }
}
