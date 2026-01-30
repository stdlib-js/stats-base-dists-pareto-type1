<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Pareto (Type I)

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pareto (Type I) distribution.



<section class="usage">

## Usage

```javascript
import pareto1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-pareto-type1/tags). For example,

```javascript
import pareto1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1@v0.3.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { Pareto1, cdf, entropy, kurtosis, logcdf, logpdf, mean, median, mode, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1@deno/mod.js';
```

#### pareto1

Pareto (Type I) distribution.

```javascript
var dist = pareto1;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/cdf]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a Pareto (Type I) distribution.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution.</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/pdf]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/quantile]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/entropy]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/kurtosis]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/mean]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution expected value.</span>
-   <span class="signature">[`median( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/median]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution median.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/mode]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/skewness]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/stdev]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/variance]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Pareto (Type I)][pareto-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Pareto1( [alpha, beta] )`][@stdlib/stats/base/dists/pareto-type1/ctor]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Pareto1 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1' ).Pareto1;

var dist = new Pareto1( 2.0, 4.0 );

var y = dist.cdf( 3.5 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import pareto1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1@deno/mod.js';

console.log( objectKeys( pareto1 ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-pareto-type1.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-pareto-type1

[test-image]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-pareto-type1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-pareto-type1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-pareto-type1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-pareto-type1/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-pareto-type1/main/LICENSE

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/pareto-type1/ctor]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-ctor/tree/deno

[@stdlib/stats/base/dists/pareto-type1/entropy]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-entropy/tree/deno

[@stdlib/stats/base/dists/pareto-type1/kurtosis]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-kurtosis/tree/deno

[@stdlib/stats/base/dists/pareto-type1/mean]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-mean/tree/deno

[@stdlib/stats/base/dists/pareto-type1/median]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-median/tree/deno

[@stdlib/stats/base/dists/pareto-type1/mode]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-mode/tree/deno

[@stdlib/stats/base/dists/pareto-type1/skewness]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-skewness/tree/deno

[@stdlib/stats/base/dists/pareto-type1/stdev]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-stdev/tree/deno

[@stdlib/stats/base/dists/pareto-type1/variance]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-variance/tree/deno

[@stdlib/stats/base/dists/pareto-type1/cdf]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-cdf/tree/deno

[@stdlib/stats/base/dists/pareto-type1/logcdf]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/tree/deno

[@stdlib/stats/base/dists/pareto-type1/logpdf]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logpdf/tree/deno

[@stdlib/stats/base/dists/pareto-type1/pdf]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-pdf/tree/deno

[@stdlib/stats/base/dists/pareto-type1/quantile]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-quantile/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
