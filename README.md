# Boilerplate knockout.js
Application template built with [knockout.js](https://knockoutjs.com) and [require.js](https://requirejs.org)

To use this boilerplate complete the steps described in the rest of this page.

## How to use it
1. Download the source code of this repository.
1. Open the folder with [Visual Studio Code](https://code.visualstudio.com/).
1. In order to build the project install [node.js](https://nodejs.org/en/).
1. Restore **npm** packages by running the `restore` task (Press `Ctrl + Shift + B` and choose **restore** task).
1. Build the project using the **Debug** configuration by running the `build:Debug` task (Press `Ctrl + Shift + B` and choose **build:Debug** task).
1. In order to run the project using the **Debug** configuration run the `launch:Debug` task (Press `Ctrl + Shift + B` and choose **build:Debug** task).

## Configuration
1. If you want to run the project, you need to install the **IIS Express** and configure the path to it in the *Workspace Settings* by modifying the setting `build.iisexpress`.
1. When you run the project using the `launch:Debug` task, it will open the application using the browser specified by the `build.browser` workspace setting.
1. The port can be modified by changing the `build.debug.port` workspace setting.

## Prerequisites
Install `fontforge`.
* Download and install [fontforge](http://fontforge.github.io/en-US/downloads/windows/).
* Add `C:\Program Files (x86)\FontForgeBuilds\bin` to your `PATH` environment variable.
