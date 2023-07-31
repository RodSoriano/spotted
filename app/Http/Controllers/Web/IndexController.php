<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Web\Locale\LocaleTextPageSelector;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    use LocaleTextPageSelector;

    public function index(): Response
    {
        return Inertia::render('Index', [
            'localeText' => $this->indexText(),
        ]);
    }
}
