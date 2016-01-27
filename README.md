# VKuche_client

    $ git clone https://github.com/alivanov/VKuche_client.git
    $ cd VKuche_client
    $ npm install
    $ ./node_modules/.bin/gulp install (or bower install)
    $ ./install_plugins.sh
    $ ./node_modules/.bin/gulp

### Start the app in a browser
    $ ./node_modules/.bin/gulp watch
    $ ionic serve

### Re-add platform if any troubles
    $ ionic platform rm ios //or android
    $ ionic platform add ios //or android

### Run on device
    $ ionic run ios //or android

### Useful flags (l - livereload, s - server logs, c - client logs)
    $ ionic run android -l -s -c

### Run on emulator
    $ ionic build ios //or android
    $ ionic emulate ios //or android

### Run unit tests
    $ npm install -g karma-cli
    $ cd tests/unit
    $ karma start karma.conf.js

### Trobleshotings

* _gulp install_ causes __Error: Cannot find module <module_name>__ -> repeat npm install
* __Refused to load the script <script_url> because it violates the following Content Security Policy directive: "script-src 'self' 'unsafe-inline' 'unsafe-eval'"__ - remove Content-Security-Policy meta tag from index.html