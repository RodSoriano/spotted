<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class LocaleController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('User/Language');
    }

    public function change(Request $request): Redirector|RedirectResponse
    {
        $language = $request->language;

        App::setLocale($language);
        session()->put('locale', $language);

        return redirect('/');
    }
}
