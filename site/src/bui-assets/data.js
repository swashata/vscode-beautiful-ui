exports.tsx = `import React, { useState, Component } from 'react';

type CounterProps = {
	initialValue: number;
};
function Counter(props: CounterProps) {
	const [count, setCount] = useState(props.initialValue);
	return (
		<div>
			<p>Current count is {count}</p>
			<p>
				<button
					type="button"
					onClick={e => {
						e.preventDefault();
						setCount(c => c + 1);
					}}
				>
					Increase
				</button>{' '}
				<button
					type="button"
					onClick={e => {
						e.preventDefault();
						setCount(c => c - 1);
					}}
				>
					Decrease
				</button>
			</p>
		</div>
	);
}

class App extends Component {
	render() {
		return <Counter initialValue={10} />;
	}
}

export default App;
`;

exports.js = `/**
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/lodash/lodash/blob/master/.internal/arrayReduce.js
 * Copyright are held by original authors.
 *
 * A specialized version of \`reduce\` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of \`array\` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

export default arrayReduce;
`;

exports.jsx = `import React from 'react';
import injectSheet from 'react-jss';

import './TabGroup.css';

const styles = theme => ({
	group: {
		background: theme.bgLightest(),
		borderColor: theme.bgLighter(),
		'& .bui-vsc-tabgroup__tab': {
			background: theme.bgDarkest(),
			color: theme.textLighter(),
			borderColor: theme.bgLightest(),
			'&:hover': {
				background:
					theme.type === 'dark'
						? theme.bgLightest()
						: theme.bgLighter(),
			},
			'&.active': {
				borderColor:
					theme.type === 'dark'
						? theme.bgLightest()
						: theme.bgDarkest(),
				borderBottomColor: theme.bgAccentDarker(),
			},
		},
	},
});

const TabGroup = ({ classes, modes, mode, setMode }) => (
	<div className={\`bui-vsc-tabgroup \${classes.group}\`}>
		{Object.keys(modes).map(key => (
			<div
				className={\`bui-vsc-tabgroup__tab \${
					key === mode ? 'active' : ''
				}\`}
				key={key}
				onClick={() => setMode(key)}
			>
				example.{key}
			</div>
		))}
	</div>
);

export default injectSheet(styles)(TabGroup);
`;

exports.php = `<?php

//
// This file is just an example. I took it from the source one and
// edited to demonstrate the syntax highlighting. The code may
// not work or even should not.
//
// Original: https://github.com/laravel/framework/blob/5.5/src/Illuminate/Bus/Dispatcher.php
// Copyright are held by original authors.
//

namespace Illuminate\Bus;

use Closure;
use RuntimeException;

class Dispatcher implements QueueingDispatcher
{
    protected $container;

    protected $pipeline;

    protected $queueResolver;

    public function __construct(Container $container, Closure $queueResolver = null)
    {
        $this->container = $container;
        $this->queueResolver = $queueResolver;
        $this->pipeline = new Pipeline($container);
    }

    public function dispatch($command)
    {
        if ($this->queueResolver && $this->commandShouldBeQueued($command)) {
            return $this->dispatchToQueue($command);
        } else {
            return $this->dispatchNow($command);
        }
    }

    public function dispatchNow($command, $handler = null)
    {
        if ($handler || $handler = $this->getCommandHandler($command)) {
            $callback = function ($command) use ($handler) {
                return $handler->handle($command);
            };
        } else {
            $callback = function ($command) {
                return $this->container->call([$command, 'handle']);
            };
        }

        return $this->pipeline
          ->send($command)->through($this->pipes)->then($callback);
    }

    public function hasCommandHandler($command)
    {
        return array_key_exists(get_class($command), $this->handlers);
    }

    public function getCommandHandler($command)
    {
        if ($this->hasCommandHandler($command)) {
            return $this->container->make($this->handlers[get_class($command)]);
        }

        return false;
    }



    public function dispatchToQueue($command)
    {
        $connection = $command->connection ?? null;

        $queue = call_user_func($this->queueResolver, $connection);

        // if (! $queue instanceof Queue) {
        //     throw new RuntimeException('Queue resolver did not return a Queue implementation.');
        // }

        if (method_exists($command, 'queue')) {
            return $command->queue($queue, $command);
        } else {
            return $this->pushCommandToQueue($queue, $command);
        }
    }

    protected function dispatchToJS($json) {
      $encoded = json_encode( $json );
      echo $encoded;
    }
}`;

exports.html = `<!--
This file is just an example. I took it from the source one and
edited to demonstrate the syntax highlighting. The code may
not work or even should not.

Original: https://github.com/google/web-starter-kit/blob/master/app/index.html
Copyright are held by original authors.
-->

<!doctype html>
<html lang="">
 <head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Web Starter Kit</title>
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css">
   <link rel="stylesheet" href="styles/main.css">
 </head>
 <body class="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
   <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	 <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
	   <div class="mdl-layout--large-screen-only mdl-layout__header-row">
	   </div>
	   <div class="mdl-layout--large-screen-only mdl-layout__header-row">
		 <h3>Web Starter Kit</h3>
	   </div>
	   <div class="mdl-layout--large-screen-only mdl-layout__header-row">
	   </div>
	   <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
		 <a href="#overview" class="mdl-layout__tab is-active">Overview</a>
		 <a href="#features" class="mdl-layout__tab">Features</a>
		 <a href="#features" class="mdl-layout__tab">Details</a>
		 <a href="#features" class="mdl-layout__tab">Technology</a>
		 <a href="#features" class="mdl-layout__tab">FAQ</a>
		 <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
		   <i class="material-icons" role="presentation">add</i>
		   <span class="visuallyhidden">Add</span>
		 </button>
	   </div>
	 </header>
	 <main class="mdl-layout__content">
	   <div class="mdl-layout__tab-panel is-active" id="overview">
		 <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
		 </section>
		 <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
		   <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
			 <i class="material-icons">more_vert</i>
		   </button>
		   <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn2">
			 <li class="mdl-menu__item">Lorem</li>
			 <li class="mdl-menu__item" disabled>Ipsum</li>
			 <li class="mdl-menu__item">Dolor</li>
		   </ul>
		 </section>
	   </div>
	 </main>
   </div>
   <script src="https://code.getmdl.io/1.2.1/material.min.js"></script>
   <script src="scripts/main.js"></script>
 </body>
</html>
`;

exports.md = `# Heading

Paragraphs are separated
by a blank line.

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Text attributes _italic_, *italic*, __bold__, **bold**, \`monospace\`.

-------------------------------

Lists:

  1. oranges
    - tasty
    - healthy
  2. apples
  3. pears

A [link](http://example.com).

- Another List
- Yet another

\`\`\`html
No language indicated, so no syntax highlighting.
But let's throw in a <b class="hello foo">tag</b>.
\`\`\`

\`\`\`diff
- Hello World
+ Hello Universe
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

`;

exports.css = `/*
* This file is just an example. I took it from the source one and
* edited to demonstrate the syntax highlighting. The code may
* not work or even should not.
*
* Original: https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap.css
* Copyright are held by original authors.
*/

html {
 font-family: sans-serif;
 line-height: 1.15;
 -webkit-text-size-adjust: 100%;
 -ms-text-size-adjust: 100%;
 -ms-overflow-style: scrollbar;
 -webkit-tap-highlight-color: transparent;
}

body {
 margin: 0;
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
 font-size: 1rem;
 font-weight: normal;
 line-height: 1.5;
 color: #212529;
 text-align: left;
 background-color: #fff;
}

#myitem {
 margin: 0;
}

.btn-primary {
 color: #fff;
 background-color: #007bff;
 border-color: #007bff;
}

.btn-primary:hover {
 color: #fff;
 background-color: #0069d9;
 border-color: #0062cc;
}

.btn-primary:focus, .btn-primary.focus {
 box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
 background-color: #007bff;
 border-color: #007bff;
}

.btn-primary:active, .btn-primary.active,
.show > .btn-primary.dropdown-toggle {
 background-color: #0069d9;
 background-image: none;
 border-color: #0062cc;
}

.btn-secondary {
 color: #fff;
 background-color: #868e96;
 border-color: #868e96;
}

.btn-secondary:hover {
 color: #fff;
 background-color: #727b84;
 border-color: #6c757d;
}

.btn-secondary:focus, .btn-secondary.focus {
 box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
 background-color: #868e96;
 border-color: #868e96;
}

.btn-secondary:active, .btn-secondary.active,
.show > .btn-secondary.dropdown-toggle {
 background-color: #727b84;
 background-image: none;
 border-color: #6c757d;
}

.btn-success {
 color: #fff;
 background-color: #28a745;
 border-color: #28a745;
}

.btn-success:hover {
 color: #fff;
 background-color: #218838;
 border-color: #1e7e34;
}

.btn-success:focus, .btn-success.focus {
 box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
 background-color: #28a745;
 border-color: #28a745;
}

.btn-success:active, .btn-success.active,
.show > .btn-success.dropdown-toggle {
 background-color: #218838;
 background-image: none;
 border-color: #1e7e34;
}

.btn-info {
 color: #fff;
 background-color: #17a2b8;
 border-color: #17a2b8;
}

.btn-info:hover {
 color: #fff;
 background-color: #138496;
 border-color: #117a8b;
}

.btn-info:focus, .btn-info.focus {
 box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
 background-color: #17a2b8;
 border-color: #17a2b8;
}

.btn-info:active, .btn-info.active,
.show > .btn-info.dropdown-toggle {
 background-color: #138496;
 background-image: none;
 border-color: #117a8b;
}

.btn-warning {
 color: #111;
 background-color: #ffc107;
 border-color: #ffc107;
}

.btn-warning:hover {
 color: #111;
 background-color: #e0a800;
 border-color: #d39e00;
}

.btn-warning:focus, .btn-warning.focus {
 box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
 background-color: #ffc107;
 border-color: #ffc107;
}

.btn-warning:active, .btn-warning.active,
.show > .btn-warning.dropdown-toggle {
 background-color: #e0a800;
 background-image: none;
 border-color: #d39e00;
}

.btn-danger {
 color: #fff;
 background-color: #dc3545;
 border-color: #dc3545;
}

.btn-danger:hover {
 color: #fff;
 background-color: #c82333;
 border-color: #bd2130;
}

.btn-danger:focus, .btn-danger.focus {
 box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
 background-color: #dc3545;
 border-color: #dc3545;
}

.btn-danger:active, .btn-danger.active,
.show > .btn-danger.dropdown-toggle {
 background-color: #c82333;
 background-image: none;
 border-color: #bd2130;
}

.btn-light {
 color: #111;
 background-color: #f8f9fa;
 border-color: #f8f9fa;
}

.btn-light:hover {
 color: #111;
 background-color: #e2e6ea;
 border-color: #dae0e5;
}

.btn-light:focus, .btn-light.focus {
 box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
}

.btn-light.disabled, .btn-light:disabled {
 background-color: #f8f9fa;
 border-color: #f8f9fa;
}

.btn-light:active, .btn-light.active,
.show > .btn-light.dropdown-toggle {
 background-color: #e2e6ea;
 background-image: none;
 border-color: #dae0e5;
}

.btn-dark {
 color: #fff;
 background-color: #343a40;
 border-color: #343a40;
}

.btn-dark:hover {
 color: #fff;
 background-color: #23272b;
 border-color: #1d2124;
}

.btn-dark:focus, .btn-dark.focus {
 box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
}

.btn-dark.disabled, .btn-dark:disabled {
 background-color: #343a40;
 border-color: #343a40;
}

.btn-dark:active, .btn-dark.active,
.show > .btn-dark.dropdown-toggle {
 background-color: #23272b;
 background-image: none;
 border-color: #1d2124;
}

.btn-outline-primary {
 color: #007bff;
 background-color: transparent;
 background-image: none;
 border-color: #007bff;
}

.btn-outline-primary:hover {
 color: #fff;
 background-color: #007bff;
 border-color: #007bff;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
 box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
 color: #007bff;
 background-color: transparent;
}

.btn-outline-primary:active, .btn-outline-primary.active,
.show > .btn-outline-primary.dropdown-toggle {
 color: #fff;
 background-color: #007bff;
 border-color: #007bff;
}

.btn-outline-secondary {
 color: #868e96;
 background-color: transparent;
 background-image: none;
 border-color: #868e96;
}

.btn-outline-secondary:hover {
 color: #fff;
 background-color: #868e96;
 border-color: #868e96;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
 box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
 color: #868e96;
 background-color: transparent;
}

.btn-outline-secondary:active, .btn-outline-secondary.active,
.show > .btn-outline-secondary.dropdown-toggle {
 color: #fff;
 background-color: #868e96;
 border-color: #868e96;
}

.btn-outline-success {
 color: #28a745;
 background-color: transparent;
 background-image: none;
 border-color: #28a745;
}

.btn-outline-success:hover {
 color: #fff;
 background-color: #28a745;
 border-color: #28a745;
}

.btn-outline-success:focus, .btn-outline-success.focus {
 box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
 color: #28a745;
 background-color: transparent;
}

.btn-outline-success:active, .btn-outline-success.active,
.show > .btn-outline-success.dropdown-toggle {
 color: #fff;
 background-color: #28a745;
 border-color: #28a745;
}

.btn-outline-info {
 color: #17a2b8;
 background-color: transparent;
 background-image: none;
 border-color: #17a2b8;
}

.btn-outline-info:hover {
 color: #fff;
 background-color: #17a2b8;
 border-color: #17a2b8;
}

.btn-outline-info:focus, .btn-outline-info.focus {
 box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
 color: #17a2b8;
 background-color: transparent;
}

.btn-outline-info:active, .btn-outline-info.active,
.show > .btn-outline-info.dropdown-toggle {
 color: #fff;
 background-color: #17a2b8;
 border-color: #17a2b8;
}

.btn-outline-warning {
 color: #ffc107;
 background-color: transparent;
 background-image: none;
 border-color: #ffc107;
}

.btn-outline-warning:hover {
 color: #fff;
 background-color: #ffc107;
 border-color: #ffc107;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
 box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
 color: #ffc107;
 background-color: transparent;
}

.btn-outline-warning:active, .btn-outline-warning.active,
.show > .btn-outline-warning.dropdown-toggle {
 color: #fff;
 background-color: #ffc107;
 border-color: #ffc107;
}

.btn-outline-danger {
 color: #dc3545;
 background-color: transparent;
 background-image: none;
 border-color: #dc3545;
}

.btn-outline-danger:hover {
 color: #fff;
 background-color: #dc3545;
 border-color: #dc3545;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
 box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
 color: #dc3545;
 background-color: transparent;
}

.btn-outline-danger:active, .btn-outline-danger.active,
.show > .btn-outline-danger.dropdown-toggle {
 color: #fff;
 background-color: #dc3545;
 border-color: #dc3545;
}

.btn-outline-light {
 color: #f8f9fa;
 background-color: transparent;
 background-image: none;
 border-color: #f8f9fa;
}

.btn-outline-light:hover {
 color: #212529;
 background-color: #f8f9fa;
 border-color: #f8f9fa;
}

.btn-outline-light:focus, .btn-outline-light.focus {
 box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
 color: #f8f9fa;
 background-color: transparent;
}

.btn-outline-light:active, .btn-outline-light.active,
.show > .btn-outline-light.dropdown-toggle {
 color: #212529;
 background-color: #f8f9fa;
 border-color: #f8f9fa;
}

.btn-outline-dark {
 color: #343a40;
 background-color: transparent;
 background-image: none;
 border-color: #343a40;
}

.btn-outline-dark:hover {
 color: #fff;
 background-color: #343a40;
 border-color: #343a40;
}

.btn-outline-dark:focus, .btn-outline-dark.focus {
 box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
 color: #343a40;
 background-color: transparent;
}

.btn-outline-dark:active, .btn-outline-dark.active,
.show > .btn-outline-dark.dropdown-toggle {
 color: #fff;
 background-color: #343a40;
 border-color: #343a40;
}

.btn-link {
 font-weight: normal;
 color: #007bff;
 background-color: transparent;
 border-radius: 0;
}

.btn-link:hover {
 color: #0056b3;
 text-decoration: underline;
 background-color: transparent;
 border-color: transparent;
}

.btn-link:focus, .btn-link.focus {
 border-color: transparent;
 box-shadow: none;
}

.btn-link:disabled, .btn-link.disabled {
 color: #868e96;
}

.btn-lg, .btn-group-lg > .btn {
 padding: 0.5rem 1rem;
 font-size: 1.25rem;
 line-height: 1.5;
 border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
 padding: 0.25rem 0.5rem;
 font-size: 0.875rem;
 line-height: 1.5;
 border-radius: 0.2rem;
}

.btn-block {
 display: block;
 width: 100%;
}
`;

exports.c = `/*
* This file is just an example. I took it from the source one and
* edited to demonstrate the syntax highlighting. The code may
* not work or even should not.
*
* Original: https://github.com/git/git/blob/master/blame.c
* Copyright are held by original authors.
*/

#include "tag.h"
#include "blame.h"

void blame_origin_decref(struct blame_origin *o)
{
 if (o && --o->refcnt <= 0) {
   struct blame_origin *p, *l = NULL;
   if (o->previous)
	 blame_origin_decref(o->previous);
   free(o->file.ptr);
   for (p = o->commit->util; p; l = p, p = p->next) {
	 if (p == o) {
	   if (l)
		 l->next = p->next;
	   else
		 o->commit->util = p->next;
	   free(o);
	   return;
	 }
   }
   die("internal error in blame_origin_decref");
 }
}

static struct blame_origin *make_origin(struct commit *commit, const char *path)
{
 struct blame_origin *o;
 FLEX_ALLOC_STR(o, path, path);
 o->commit = commit;
 o->refcnt = 1;
 o->next = commit->util;
 commit->util = o;
 return o;
}

static struct blame_origin *get_origin(struct commit *commit, const char *path)
{
 struct blame_origin *o, *l;

 for (o = commit->util, l = NULL; o; l = o, o = o->next) {
   if (!strcmp(o->path, path)) {
	 if (l) {
	   l->next = o->next;
	   o->next = commit->util;
	   commit->util = o;
	 }
	 return blame_origin_incref(o);
   }
 }
 return make_origin(commit, path);
}
`;
