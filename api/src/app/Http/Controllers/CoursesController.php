<?php

namespace App\Http\Controllers;

use App\Interfaces\CourseRepositoryInterface;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    protected $repo;

    public function __construct(CourseRepositoryInterface $repository)
    {
        $this->repo = $repository;
    }

    public function index()
    {
        return response()->json($this->repo->allRaw()->paginate(20));
    }


    public function show($id)
    {
        return $this->repo->show($id, []);
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $this->repo->update($id, $request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->repo->delete($id);
    }
}
