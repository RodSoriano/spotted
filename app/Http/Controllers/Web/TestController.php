<?php 

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; 

class TestController extends Controller
{
    public function show() {
        return Inertia::render('Test');
    }
}
