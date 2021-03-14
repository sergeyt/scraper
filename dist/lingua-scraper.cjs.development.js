'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var trim = /*#__PURE__*/require("lodash/trim");

function strip(s) {
  return trim(s == null ? void 0 : s.trim(), "\u200B");
}

function isNode() {
  return Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}

function isBrowser() {
  return !isNode() && typeof window !== "undefined";
}

var IS_BROWSER = /*#__PURE__*/isBrowser();

var unsplash = {
  type: "visual",
  name: "unsplash",
  url: "https://unsplash.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text;
    var txt = text.replace(" ", "-");
    return "/s/photos/" + txt;
  },
  plan: [{
    selector: "div[data-test=\"search-photos-route\"] figure img",
    exclude: ["^https://images.unsplash.com/profile-"],
    visual: ["@src"]
  }]
};

var macmillan = {
  type: "universal",
  name: "macmillan",
  url: "https://www.macmillandictionary.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text;
    return "/dictionary/british/" + encodeURIComponent(text);
  },
  plan: [{
    selector: ".audio_play_button",
    audio: ["@data-src-mp3", "@data-src-ogg"]
  }, {
    selector: ".PRON",
    term: "transcription"
  }, {
    selector: ".PART-OF-SPEECH",
    term: "tag"
  }, {
    selector: ".SYNTAX-CODING",
    term: "tag"
  }, {
    selector: ".DEFINITION",
    term: "definition"
  }, {
    selector: ".EXAMPLES",
    term: "in"
  }, {
    selector: ".PHR-XREF",
    term: "in"
  }, {
    selector: ".synonyms .theslink",
    exclude: ["..."],
    term: "synonym"
  }]
};

/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.6.0';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = [...b64ch];
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) => src
    .replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_')
    .replace(/=+$/m, '');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a), c => c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/=+$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins,
};

var pairs = [["австралия", "australia"], ["вануату", "vanuatu"], ["кирибати", "kiribati"], ["маршалловы острова", "marshall islands"], ["науру", "nauru"], ["новая зеландия", "new zealand"], ["палау", "palau"], ["папуа — новая гвинея", "papua new guinea"], ["самоа", "samoa"], ["соломоновы острова", "solomon islands"], ["тонга", "tonga"], ["тувалу", "tuvalu"], ["федеративные штаты микронезии", "federated states of micronesia"], ["фиджи", "fiji"], ["абхазия", "abkhazia"], ["азербайджан", "azerbaijan"], ["армения", "armenia"], ["афганистан", "afghanistan"], ["бангладеш", "bangladesh"], ["бахрейн", "bahrain"], ["бруней", "brunei"], ["бутан", "bhutan"], ["восточный тимор", "east timor"], ["вьетнам", "vietnam"], ["грузия", "georgia"], ["израиль", "israel"], ["индия", "india"], ["индонезия", "indonesia"], ["иордания", "jordan"], ["ирак", "iraq"], ["иран", "iran"], ["йемен", "yemen"], ["казахстан", "kazakhstan"], ["камбоджа", "cambodia"], ["катар", "qatar"], ["киргизия", "kyrgyzstan"], ["китай", "china"], ["кувейт", "kuwait"], ["лаос", "laos"], ["ливан", "lebanon"], ["малайзия", "malaysia"], ["мальдивы", "maldives"], ["монголия", "mongolia"], ["мьянма", "myanmar"], ["непал", "nepal"], ["оаэ", "uae"], ["оман", "oman"], ["пакистан", "pakistan"], ["россия", "russia"], ["саудовская аравия", "saudi arabia"], ["северная корея", "north korea"], ["сингапур", "singapore"], ["сирия", "syria"], ["таджикистан", "tajikistan"], ["таиланд", "thailand"], ["тайва́нь", "taiwan"], ["туркмения", "turkmenistan"], ["турция", "turkey"], ["узбекистан", "uzbekistan"], ["филиппины", "philippines"], ["шри-ланка", "sri lanka"], ["южная корея", "south korea"], ["южная осетия", "south ossetia"], ["япония", "japan"], ["алжир", "algeria"], ["ангола", "angola"], ["бенин", "benin"], ["ботсвана", "botswana"], ["буркина фасо", "burkina faso"], ["бурунди", "burundi"], ["габон", "gabon"], ["гамбия", "gambia"], ["гана", "ghana"], ["гвинея", "guinea"], ["гвинея-бисау", "guinea-bissau"], ["джибути", "djibouti"], ["египет", "egypt"], ["замбия", "zambia"], ["зимбабве", "zimbabwe"], ["кабо-верде", "cape verde"], ["камерун", "cameroon"], ["кения", "kenya"], ["коморы", "comoros"], ["демократическая республика конго", "democratic republic of the congo"], ["республика конго", "republic of the congo"], ["кот-д’ивуар", "côte d'ivoire"], ["лесото", "lesotho"], ["либерия", "liberia"], ["ливия", "libya"], ["маврикий", "mauritius"], ["мавритания", "mauritania"], ["мадагаскар", "madagascar"], ["малави", "malawi"], ["мали", "mali"], ["марокко", "morocco"], ["мозамбик", "mozambique"], ["намибия", "namibia"], ["нигер", "niger"], ["нигерия", "nigeria"], ["руанда", "rwanda"], ["сан-томе и принсипи", "sao tome and principe"], ["свазиленд", "swaziland"], ["сейшелы", "seychelles"], ["сенегал", "senegal"], ["сомали", "somalia"], ["судан", "sudan"], ["сьерра-леоне", "sierra leone"], ["танзания", "tanzania"], ["того", "togo"], ["тунис", "tunisia"], ["уганда", "uganda"], ["центральноафриканская республика", "central african republic"], ["чад", "chad"], ["экваториальная гвинея", "equatorial guinea"], ["эритрея", "eritrea"], ["эфиопия", "ethiopia"], ["южно-африканская республика", "south africa"], ["австрия", "austria"], ["албания", "albania"], ["андорра", "andorra"], ["англия", "england"], ["белоруссия", "belarus"], ["бельгия", " belgium"], ["болгария", "bulgaria"], ["босния и герцеговина", "bosnia and herzegovina"], ["ватикан", "vatican"], ["великобритания", "great britain"], ["венгрия", "hungary"], ["германия", "germany"], ["греция", "greece"], ["дания", "denmark"], ["ирландия", "ireland"], ["исландия", "iceland"], ["испания", "spain"], ["италия", "italy"], ["кипр", "cyprus"], ["косово", "kosovo"], ["латвия", "latvia"], ["литва", "lithuania"], ["лихтенштейн", "liechtenstein"], ["люксембург", "luxembourg"], ["македония", "macedonia"], ["мальта", "malta"], ["молдавия", "moldova"], ["монако", "monaco"], ["нидерланды", "netherlands"], ["норвегия", "norway"], ["польша", "poland"], ["португалия", "portugal"], ["россия", "russia"], ["румыния", "romania"], ["сан-марино", "san marino"], ["сербия", "serbia"], ["словакия", "slovakia"], ["словения", "slovenia"], ["северного кипра", "northern cyprus"], ["северная ирландия", "northern ireland"], ["турция", "turkey"], ["украина", "ukraine"], ["уэльс", "wales"], ["финляндия", "finland"], ["франция", "france"], ["хорватия", "croatia"], ["черногория", "montenegro"], ["чехия", "czech republic"], ["швейцария", "switzerland"], ["швеция", "sweden"], ["шотландия", "scotland"], ["эстония", "estonia"], ["антигуа и барбуда", "antigua and barbuda"], ["багамы", "bahamas"], ["барбадос", "barbados"], ["белиз", "belize"], ["гаити", "haiti"], ["гватемала", "guatemala"], ["гондурас", "honduras"], ["гренада", "grenada"], ["доминика", "dominica"], ["доминиканская республика", "dominican republic"], ["канада", "canada"], ["коста-рика", "costa rica"], ["мексика", "mexico"], ["никарагуа", "nicaragua"], ["панама", "panama"], ["сальвадор", "el salvador"], ["сент-люсия", "saint lucia"], ["сент-винсент и гренадины", " saint vincent and the grenadines"], ["сент-китс и невис", "saint kitts and nevis"], ["соединённые штаты америки (сша)", "united states of america (usa)"], ["тринидад и тобаго", "trinidad and tobago"], ["ямайка", "jamaica"], ["аргентина", "argentina"], ["бразилия", "brazil"], ["боливия", "bolivia"], ["венесуэла", "venezuela"], ["гайана", "guyana"], ["колумбия", "colombia"], ["парагвай", "paraguay"], ["перу", "peru"], ["суринам", "suriname"], ["уругвай", "uruguay"], ["французская гвиана", "french guiana"], ["чили", "chile"], ["эквадор", "ecuador"]];
var map = /*#__PURE__*/new Map(pairs);
function translate(name) {
  var key = strip(name).toLowerCase();
  return map.get(key);
}

var trimEnd = /*#__PURE__*/require("lodash/trimEnd");

var trimStart = /*#__PURE__*/require("lodash/trimStart");

var isEmpty = /*#__PURE__*/require("lodash/isEmpty");
var AUDIO_HOST = "https://audio00.forvo.com/audios/mp3";
var encode$1 = encodeURIComponent;

function unquote(s) {
  if (s && s.startsWith("'")) {
    return s.substr(1, s.length - 2);
  }

  return s;
}

function parse_fn(src) {
  if (!src) {
    return undefined;
  }

  var i = src.indexOf("(");
  var j = src.indexOf(")");
  var name = src.substr(0, i);
  var a = src.substr(i + 1, j - i - 1).split(",");
  var args = a.map(unquote);
  return {
    name: name,
    args: args
  };
}

function translate_gender(val) {
  val = strip(val);

  if (val === "\u0436\u0435\u043D\u0449\u0438\u043D\u0430") {
    return "f";
  }

  if (val === "\u043C\u0443\u0436\u0447\u0438\u043D\u0430") {
    return "m";
  }

  return val;
}

function parse_from(s) {
  if (!s) {
    return undefined;
  }

  s = trimEnd(trimStart(s, "("), ")");
  var a = s.split(",");

  if (isEmpty(a)) {
    return undefined;
  }

  var result = {
    gender: translate_gender(a[0])
  };

  if (a.length === 2) {
    result.country = translate(a[1]);
  }

  return result;
}

var forvo = {
  type: "audio",
  name: "forvo",
  url: "https://forvo.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text,
        lang = _ref.lang;
    return "https://ru.forvo.com/word/" + encode$1(text) + "/#" + lang;
  },
  plan: [{
    selector: "article.pronunciations ul.show-all-pronunciations li",
    parse: /*#__PURE__*/function () {
      var _parse = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(elem) {
        var btn, fn, rel, url, result, author, val, from, d;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return elem.querySelectorAll("span.play");

              case 2:
                btn = _context.sent[0];

                if (btn) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 5:
                _context.t0 = parse_fn;
                _context.next = 8;
                return btn.getAttribute("onclick");

              case 8:
                _context.t1 = _context.sent;
                fn = (0, _context.t0)(_context.t1);

                if (!(!fn || fn.name !== "Play")) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 12:
                rel = gBase64.decode(fn["args"][4]);
                url = AUDIO_HOST + "/" + rel;

                if (url.endsWith(".mp3")) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 16:
                result = {
                  url: url
                };
                _context.next = 19;
                return elem.querySelectorAll("span.ofLink");

              case 19:
                author = _context.sent[0];

                if (!author) {
                  _context.next = 25;
                  break;
                }

                _context.next = 23;
                return author.getAttribute("data-p2");

              case 23:
                val = _context.sent;

                if (val) {
                  result.author = val;
                }

              case 25:
                _context.next = 27;
                return elem.querySelectorAll("span.from");

              case 27:
                from = _context.sent[0];

                if (!from) {
                  _context.next = 35;
                  break;
                }

                _context.t2 = parse_from;
                _context.next = 32;
                return from.textContent();

              case 32:
                _context.t3 = _context.sent;
                d = (0, _context.t2)(_context.t3);

                if (d) {
                  Object.assign(result, d);
                }

              case 35:
                return _context.abrupt("return", [{
                  audio: result
                }]);

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function parse(_x) {
        return _parse.apply(this, arguments);
      }

      return parse;
    }()
  }]
};

var howjsay = {
  type: "audio",
  name: "howjsay",
  url: "https://howjsay.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text;
    return "/mp3/" + encodeURIComponent(text) + ".mp3";
  },
  getData: function getData(url) {
    return _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                audio: [{
                  url: url
                }]
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};

var webster = {
  type: "universal",
  name: "merriam-webster",
  url: "https://www.merriam-webster.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text;
    return "/dictionary/" + encodeURIComponent(text);
  },
  plan: [{
    selector: "span.prs a.play-pron",
    audio: /*#__PURE__*/function () {
      var _audio = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(btn) {
        var lang, dir, file;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return btn.getAttribute("data-lang");

              case 2:
                lang = _context.sent.replace("_", "/");
                _context.next = 5;
                return btn.getAttribute("data-dir");

              case 5:
                dir = _context.sent;
                _context.next = 8;
                return btn.getAttribute("data-file");

              case 8:
                file = _context.sent;
                return _context.abrupt("return", "https://media.merriam-webster.com/audio/prons/" + lang + "/mp3/" + dir + "/" + file + ".mp3");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function audio(_x) {
        return _audio.apply(this, arguments);
      }

      return audio;
    }()
  }, {
    selector: "span.prs span.pr",
    term: "transcription"
  }, {
    selector: "div.vg .dt",
    term: "definition",
    lstrip: ":"
  }, {
    selector: ".ex-sent.t",
    term: "in"
  }, {
    selector: ".ure",
    term: "related"
  }, {
    selector: "span.fl",
    term: "tag"
  }]
};

var map$1 = /*#__PURE__*/require("lodash/map");

var header = "div.page div.dictionary div.pos-header";
var body = "div.page div.dictionary div.pos-body";
var dictionaries = {
  ru: "english-russian",
  fr: "english-french",
  de: "english-german"
};

function makeUrl(text, dictionary) {
  var t = encodeURIComponent(text.replace(" ", "-"));
  return "/dictionary/" + dictionary + "/" + t;
} // TODO handle different languages


var cambridge = {
  type: "universal",
  name: "cambridge",
  url: "https://dictionary.cambridge.org",
  makePages: function makePages(_ref) {
    var text = _ref.text;
    return [{
      url: makeUrl(text, "english"),
      plan: [{
        // TODO extract region too
        selector: header + " span.dpron-i amp-audio source",
        audio: ["@src"]
      }, {
        selector: header + " span.dpron-i span.ipa",
        term: "transcription"
      }, {
        selector: header + " .posgram .pos",
        term: "tag"
      }, {
        selector: header + " .posgram .gram .gc",
        term: "tag",
        map: function map(c) {
          var codes = {
            C: "countable",
            U: "uncountable",
            S: "singular"
          };
          return codes[c] || undefined;
        }
      }, {
        selector: body + " div.def-block div.def",
        term: "definition"
      }, {
        selector: body + " div.def-block amp-img",
        visual: ["@src"]
      }, {
        selector: body + " div.def-block span.eg",
        term: "in"
      }, {
        selector: "div.page div.dataset span.deg",
        term: "in"
      }, {
        selector: "div.page div.dataset div.cpegs div.lbb a.hdib",
        term: "collocation"
      }]
    }].concat(map$1(dictionaries, function (d, lang) {
      return {
        url: makeUrl(text, d),
        plan: [{
          selector: ".sense-body .trans",
          term: "translated_as@" + lang
        }]
      };
    }));
  }
};

var trimEnd$1 = /*#__PURE__*/require("lodash/trimEnd");

var trimStart$1 = /*#__PURE__*/require("lodash/trimStart");

var urban = {
  type: "universal",
  name: "urban-dictionary",
  url: "https://www.urbandictionary.com",
  makeUrl: function makeUrl(_ref) {
    var text = _ref.text;
    return "/define.php?term=" + encodeURIComponent(text);
  },
  plan: [{
    selector: "#content div.def-panel a.play-sound",
    audio: ["@data-urls"],
    map: function map(s) {
      return trimEnd$1(trimStart$1(s, "[\""), "\"]");
    }
  }, {
    selector: "#content div.def-panel div.meaning",
    term: "definition"
  }]
};

var _require = /*#__PURE__*/require("fetch-ponyfill")(),
    fetch = _require.fetch;

var cheerio = /*#__PURE__*/require("cheerio");

function makeElements($, found, filter) {
  if (filter === void 0) {
    filter = function filter() {
      return true;
    };
  }

  var result = [];
  found.each(function (i, elem) {
    if (!filter(elem)) {
      return;
    }

    result.push(new CheerioElement($, $(elem)));
  });
  return result;
}

var CheerioElement = /*#__PURE__*/function () {
  function CheerioElement($, elem) {
    this.$ = $;
    this.elem = elem;
  }

  var _proto = CheerioElement.prototype;

  _proto.querySelectorAll = function querySelectorAll(selector) {
    return Promise.resolve(this.querySelectorAllImpl(selector));
  };

  _proto.querySelectorAllImpl = function querySelectorAllImpl(selector) {
    if (selector === "#children") {
      var children = this.elem.children();
      return makeElements(this.$, children);
    }

    if (selector === "#text") {
      var _children = this.elem.contents();

      return makeElements(this.$, _children, function (e) {
        return e.type === "text";
      });
    }

    return makeElements(this.$, this.elem.find(selector));
  };

  _proto.getAttribute = /*#__PURE__*/function () {
    var _getAttribute = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(name) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.elem.attr(name));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getAttribute(_x) {
      return _getAttribute.apply(this, arguments);
    }

    return getAttribute;
  }();

  _proto.textContent = /*#__PURE__*/function () {
    var _textContent = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.elem.text());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function textContent() {
      return _textContent.apply(this, arguments);
    }

    return textContent;
  }();

  return CheerioElement;
}();

var CheerioEngine = /*#__PURE__*/function () {
  function CheerioEngine(html) {
    this.$ = cheerio.load(html);
  }

  var _proto2 = CheerioEngine.prototype;

  _proto2.querySelectorAll = function querySelectorAll(selector) {
    var found = this.$(selector);
    return Promise.resolve(makeElements(this.$, found));
  };

  _proto2.close = function close() {
    return Promise.resolve(undefined);
  };

  _proto2.getAttribute = function getAttribute(name) {
    return Promise.resolve("");
  };

  _proto2.textContent = function textContent() {
    return Promise.resolve("");
  };

  return CheerioEngine;
}();

function makeCheerioEngine(_x2) {
  return _makeCheerioEngine.apply(this, arguments);
}

function _makeCheerioEngine() {
  _makeCheerioEngine = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(url) {
    var headers, resp, html;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (IS_BROWSER) {
              url = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
            }

            headers = {
              Accept: "text/html,application/xhtml+xml"
            };

            if (!IS_BROWSER) {
              headers["User-Agent"] = "lingua-bot";
            }

            _context3.next = 5;
            return fetch(url, {
              headers: headers
            });

          case 5:
            resp = _context3.sent;

            if (resp.ok) {
              _context3.next = 8;
              break;
            }

            throw new Error(resp.statusText);

          case 8:
            _context3.next = 10;
            return resp.text();

          case 10:
            html = _context3.sent;
            return _context3.abrupt("return", new CheerioEngine(html));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _makeCheerioEngine.apply(this, arguments);
}

// import { makePlaywrightEngine } from './playwright';
function makeEngine(type, url) {
  // if (type === "playwright") {
  //     return makePlaywrightEngine(url);
  // }
  return makeCheerioEngine(url);
}

var forEach = /*#__PURE__*/require("lodash/forEach");

var isArray = /*#__PURE__*/require("lodash/isArray");

var isString = /*#__PURE__*/require("lodash/isString");

var isNil = /*#__PURE__*/require("lodash/isNil");

var mapValues = /*#__PURE__*/require("lodash/mapValues");

var isEmpty$1 = /*#__PURE__*/require("lodash/isEmpty");

var flatten = /*#__PURE__*/require("lodash/flatten");
var sources = [unsplash, //wordnik,
webster, macmillan, cambridge, urban, forvo, howjsay];

function takeMeta(source) {
  return {
    type: source.type,
    name: source.name,
    url: source.url
  };
}

function executePlanImpl(_x, _x2) {
  return _executePlanImpl.apply(this, arguments);
}

function _executePlanImpl() {
  _executePlanImpl = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(root, plan) {
    var data, ensureSet, collect, is_excluded, term_handler, get_values, audio_handler, visual_handler, parse_handler, _loop, _iterator4, _step4;

    return runtime_1.wrap(function _callee9$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            data = {};

            ensureSet = function ensureSet(key) {
              if (key && !data[key]) {
                data[key] = new Set();
              }
            };

            collect = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(key, item, extract) {
                var content, elements, _iterator, _step, element, values, _iterator2, _step2, val;

                return runtime_1.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        ensureSet(key);
                        content = key ? data[key] : undefined;
                        _context2.next = 4;
                        return root.querySelectorAll(item.selector);

                      case 4:
                        elements = _context2.sent;
                        _iterator = _createForOfIteratorHelperLoose(elements);

                      case 6:
                        if ((_step = _iterator()).done) {
                          _context2.next = 16;
                          break;
                        }

                        element = _step.value;
                        _context2.next = 10;
                        return extract(item, element);

                      case 10:
                        values = _context2.sent;

                        if (isArray(values)) {
                          _context2.next = 13;
                          break;
                        }

                        return _context2.abrupt("continue", 14);

                      case 13:
                        for (_iterator2 = _createForOfIteratorHelperLoose(values.filter(function (v) {
                          return !isNil(v) && v !== "";
                        })); !(_step2 = _iterator2()).done;) {
                          val = _step2.value;

                          if (content) {
                            content.add(val);
                          } else {
                            forEach(val, function (v, k) {
                              ensureSet(k);
                              data[k].add(v);
                            });
                          }
                        }

                      case 14:
                        _context2.next = 6;
                        break;

                      case 16:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function collect(_x10, _x11, _x12) {
                return _ref3.apply(this, arguments);
              };
            }();

            is_excluded = function is_excluded(item, val) {
              if (item.exclude) {
                return item.exclude.some(function (s) {
                  if (s.startsWith("^")) {
                    return val.startsWith(s.substr(1));
                  }

                  return val === s;
                });
              }

              return false;
            };

            term_handler = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(item, elem) {
                var val;
                return runtime_1.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.t0 = strip;
                        _context3.next = 3;
                        return elem.textContent();

                      case 3:
                        _context3.t1 = _context3.sent;
                        val = (0, _context3.t0)(_context3.t1);

                        if (val) {
                          _context3.next = 7;
                          break;
                        }

                        return _context3.abrupt("return", undefined);

                      case 7:
                        if (!is_excluded(item, val)) {
                          _context3.next = 9;
                          break;
                        }

                        return _context3.abrupt("return", undefined);

                      case 9:
                        if (item.lstrip && val.startsWith(item.lstrip)) {
                          val = strip(val.substr(item.lstrip.length));
                        }

                        if (val) {
                          _context3.next = 12;
                          break;
                        }

                        return _context3.abrupt("return", undefined);

                      case 12:
                        if (item.map) {
                          val = item.map(val);
                        }

                        if (val) {
                          _context3.next = 15;
                          break;
                        }

                        return _context3.abrupt("return", undefined);

                      case 15:
                        return _context3.abrupt("return", [val]);

                      case 16:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function term_handler(_x13, _x14) {
                return _ref4.apply(this, arguments);
              };
            }();

            get_values = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(item, elem, commands) {
                var results, _iterator3, _step3, cmd, val, _val;

                return runtime_1.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        results = [];

                        if (!isArray(commands)) {
                          _context4.next = 33;
                          break;
                        }

                        _iterator3 = _createForOfIteratorHelperLoose(commands);

                      case 3:
                        if ((_step3 = _iterator3()).done) {
                          _context4.next = 31;
                          break;
                        }

                        cmd = _step3.value;
                        val = void 0;

                        if (!isString(cmd)) {
                          _context4.next = 20;
                          break;
                        }

                        if (!cmd.startsWith("@")) {
                          _context4.next = 13;
                          break;
                        }

                        _context4.next = 10;
                        return elem.getAttribute(cmd.substr(1));

                      case 10:
                        val = _context4.sent;
                        _context4.next = 18;
                        break;

                      case 13:
                        _context4.t0 = strip;
                        _context4.next = 16;
                        return elem.text();

                      case 16:
                        _context4.t1 = _context4.sent;
                        val = (0, _context4.t0)(_context4.t1);

                      case 18:
                        _context4.next = 23;
                        break;

                      case 20:
                        _context4.next = 22;
                        return cmd(elem);

                      case 22:
                        val = _context4.sent;

                      case 23:
                        if (!is_excluded(item, val)) {
                          _context4.next = 25;
                          break;
                        }

                        return _context4.abrupt("continue", 29);

                      case 25:
                        if (item.map) {
                          val = item.map(val);
                        }

                        if (val) {
                          _context4.next = 28;
                          break;
                        }

                        return _context4.abrupt("continue", 29);

                      case 28:
                        results.push(val);

                      case 29:
                        _context4.next = 3;
                        break;

                      case 31:
                        _context4.next = 37;
                        break;

                      case 33:
                        _context4.next = 35;
                        return commands(elem);

                      case 35:
                        _val = _context4.sent;

                        if (!is_excluded(item, _val)) {
                          if (item.map) {
                            _val = item.map(_val);
                          }

                          if (_val) {
                            results.push(_val);
                          }
                        }

                      case 37:
                        return _context4.abrupt("return", results.length === 0 ? undefined : results);

                      case 38:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function get_values(_x15, _x16, _x17) {
                return _ref5.apply(this, arguments);
              };
            }();

            audio_handler = /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(item, elem) {
                return runtime_1.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return get_values(item, elem, item.audio);

                      case 2:
                        return _context5.abrupt("return", _context5.sent);

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function audio_handler(_x18, _x19) {
                return _ref6.apply(this, arguments);
              };
            }();

            visual_handler = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(item, elem) {
                return runtime_1.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return get_values(item, elem, item.visual);

                      case 2:
                        return _context6.abrupt("return", _context6.sent);

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function visual_handler(_x20, _x21) {
                return _ref7.apply(this, arguments);
              };
            }();

            parse_handler = function parse_handler(item, elem) {
              return item.parse(elem);
            };

            _loop = /*#__PURE__*/runtime_1.mark(function _loop() {
              var item, elements, results;
              return runtime_1.wrap(function _loop$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      item = _step4.value;

                      if (!item.term) {
                        _context9.next = 6;
                        break;
                      }

                      _context9.next = 4;
                      return collect(item.term, item, term_handler);

                    case 4:
                      _context9.next = 29;
                      break;

                    case 6:
                      if (!item.audio) {
                        _context9.next = 11;
                        break;
                      }

                      _context9.next = 9;
                      return collect("audio", item, audio_handler);

                    case 9:
                      _context9.next = 29;
                      break;

                    case 11:
                      if (!item.visual) {
                        _context9.next = 16;
                        break;
                      }

                      _context9.next = 14;
                      return collect("visual", item, visual_handler);

                    case 14:
                      _context9.next = 29;
                      break;

                    case 16:
                      if (!item.parse) {
                        _context9.next = 21;
                        break;
                      }

                      _context9.next = 19;
                      return collect(undefined, item, parse_handler);

                    case 19:
                      _context9.next = 29;
                      break;

                    case 21:
                      if (!item.obj) {
                        _context9.next = 29;
                        break;
                      }

                      _context9.next = 24;
                      return root.querySelectorAll(item.selector);

                    case 24:
                      elements = _context9.sent;
                      _context9.next = 27;
                      return Promise.all(elements.map( /*#__PURE__*/function () {
                        var _ref8 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(elem) {
                          var items;
                          return runtime_1.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.next = 2;
                                  return Promise.all(Object.keys(item.obj.plan).map( /*#__PURE__*/function () {
                                    var _ref9 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(k) {
                                      var p;
                                      return runtime_1.wrap(function _callee7$(_context7) {
                                        while (1) {
                                          switch (_context7.prev = _context7.next) {
                                            case 0:
                                              p = item.obj.plan[k];
                                              _context7.next = 3;
                                              return executePlanImpl(elem, [p]);

                                            case 3:
                                              return _context7.abrupt("return", _context7.sent);

                                            case 4:
                                            case "end":
                                              return _context7.stop();
                                          }
                                        }
                                      }, _callee7);
                                    }));

                                    return function (_x23) {
                                      return _ref9.apply(this, arguments);
                                    };
                                  }()));

                                case 2:
                                  items = _context8.sent;
                                  return _context8.abrupt("return", items.reduce(function (a, b) {
                                    return Object.assign(a, b);
                                  }, {}));

                                case 4:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8);
                        }));

                        return function (_x22) {
                          return _ref8.apply(this, arguments);
                        };
                      }()));

                    case 27:
                      results = _context9.sent;
                      data[item.obj.key] = results;

                    case 29:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _loop);
            });
            _iterator4 = _createForOfIteratorHelperLoose(plan);

          case 11:
            if ((_step4 = _iterator4()).done) {
              _context10.next = 15;
              break;
            }

            return _context10.delegateYield(_loop(), "t0", 13);

          case 13:
            _context10.next = 11;
            break;

          case 15:
            return _context10.abrupt("return", mapValues(data, function (v) {
              return Array.from(v);
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee9);
  }));
  return _executePlanImpl.apply(this, arguments);
}

function executePlan(_x3, _x4, _x5) {
  return _executePlan.apply(this, arguments);
}

function _executePlan() {
  _executePlan = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(root, plan, source) {
    var data;
    return runtime_1.wrap(function _callee10$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return executePlanImpl(root, plan);

          case 2:
            data = _context11.sent;
            return _context11.abrupt("return", {
              source: source,
              data: data
            });

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee10);
  }));
  return _executePlan.apply(this, arguments);
}

function processUrl(_x6, _x7, _x8) {
  return _processUrl.apply(this, arguments);
}

function _processUrl() {
  _processUrl = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(url, plan, source) {
    var engine, result;
    return runtime_1.wrap(function _callee11$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return makeEngine(source.engine, url);

          case 2:
            engine = _context12.sent;
            _context12.next = 5;
            return executePlan(engine, plan, takeMeta(source));

          case 5:
            result = _context12.sent;
            result.source.url = url;
            return _context12.abrupt("return", result);

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee11);
  }));
  return _processUrl.apply(this, arguments);
}

function makeParser(source) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(_ref) {
      var text, lang, query, results, url, data, result, _result;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              text = _ref.text, lang = _ref.lang;
              // TODO auto detect lang
              query = {
                text: text,
                lang: lang || "en"
              };

              if (!source.makePages) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return Promise.all(source.makePages(query).map(function (page) {
                var url = page.url;

                if (url.startsWith("/")) {
                  url = source.url + url;
                }

                return processUrl(url, page.plan, source);
              }));

            case 5:
              results = _context.sent;
              return _context.abrupt("return", results);

            case 7:
              url = source.makeUrl(query);

              if (url.startsWith("/")) {
                url = source.url + url;
              }

              if (!source.getData) {
                _context.next = 23;
                break;
              }

              _context.prev = 10;
              _context.next = 13;
              return source.getData(url, query);

            case 13:
              data = _context.sent;
              result = {
                source: takeMeta(source),
                data: data
              };
              result.source.url = url;
              return _context.abrupt("return", [result]);

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](10);
              console.log("error", source.name, _context.t0);
              return _context.abrupt("return", [{
                source: takeMeta(source),
                error: _context.t0
              }]);

            case 23:
              _context.prev = 23;
              _context.next = 26;
              return processUrl(url, source.plan, source);

            case 26:
              _result = _context.sent;
              return _context.abrupt("return", [_result]);

            case 30:
              _context.prev = 30;
              _context.t1 = _context["catch"](23);
              console.log("error", source.name, _context.t1);
              return _context.abrupt("return", [{
                source: takeMeta(source),
                error: _context.t1
              }]);

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 19], [23, 30]]);
    }));

    return function (_x9) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function fetchData(query, options) {
  if (options === void 0) {
    options = {};
  }

  var src = options.sources || sources.filter(function (s) {
    if (options.type && !(s.type === options.type || s.type === "universal")) {
      return false;
    }

    if (!isEmpty$1(options.include) && !options.include.some(function (name) {
      return s.name.toLowerCase() === name.toLowerCase();
    })) {
      return false;
    }

    if (!isEmpty$1(options.exclude) && options.exclude.some(function (name) {
      return s.name.toLowerCase() === name.toLowerCase();
    })) {
      return false;
    }

    return true;
  });
  return Promise.all(src.map(makeParser).map(function (fn) {
    return fn(query);
  })).then(function (a) {
    return flatten(a);
  });
}

var categories = [{
  name: "Color / Visual",
  words: [{
    text: "see",
    freq: 4024676
  }, {
    text: "look",
    freq: 5264728
  }, {
    text: "color",
    freq: 1217550
  }, {
    text: "dark",
    freq: 7236
  }, {
    text: "light",
    freq: 4631560
  }, {
    text: "beautiful",
    freq: 70625
  }, {
    text: "shade",
    freq: 14709
  }, {
    text: "black",
    freq: 991862
  }, {
    text: "blue",
    freq: 9697
  }, {
    text: "brown",
    freq: 758689
  }, {
    text: "clear",
    freq: 77807
  }, {
    text: "gray",
    freq: 524587
  }, {
    text: "green",
    freq: 15935
  }, {
    text: "orange",
    freq: 136408
  }, {
    text: "red",
    freq: 623324
  }, {
    text: "yellow",
    freq: 764749
  }, {
    text: "white",
    freq: 3828403
  }, {
    text: "brass",
    freq: 24311
  }, {
    text: "copper",
    freq: 365857
  }, {
    text: "gold",
    freq: 11054
  }, {
    text: "silver",
    freq: 145544
  }, {
    text: "sky",
    freq: 60483
  }]
}, {
  name: "Direction",
  words: [{
    text: "about",
    freq: 24412645
  }, {
    text: "across",
    freq: 101221
  }, {
    text: "after",
    freq: 3748487
  }, {
    text: "against",
    freq: 214580
  }, {
    text: "among",
    freq: 5524235
  }, {
    text: "at",
    freq: 5677513
  }, {
    text: "between",
    freq: 13408653
  }, {
    text: "by",
    freq: 221885
  }, {
    text: "in",
    freq: 752852
  }, {
    text: "with",
    freq: 174809
  }, {
    text: "through",
    freq: 14045665
  }, {
    text: "forward",
    freq: 72688
  }, {
    text: "here",
    freq: 8617375
  }, {
    text: "over",
    freq: 21164
  }, {
    text: "under",
    freq: 9887310
  }, {
    text: "up",
    freq: 360559
  }, {
    text: "down",
    freq: 237669
  }, {
    text: "on",
    freq: 90813956
  }, {
    text: "off",
    freq: 2951
  }, {
    text: "with",
    freq: 174809
  }, {
    text: "direction",
    freq: 43722
  }, {
    text: "distance",
    freq: 1933386
  }, {
    text: "north",
    freq: 1863086
  }, {
    text: "south",
    freq: 1090225
  }, {
    text: "east",
    freq: 1369871
  }, {
    text: "west",
    freq: 1633628
  }, {
    text: "left",
    freq: 6861319
  }, {
    text: "right",
    freq: 9060782
  }, {
    text: "front",
    freq: 154592
  }, {
    text: "back",
    freq: 23183
  }, {
    text: "high",
    freq: 28388
  }, {
    text: "low",
    freq: 3206145
  }, {
    text: "far",
    freq: 5791529
  }, {
    text: "near",
    freq: 166540
  }]
}, {
  name: "Time",
  words: [{
    text: "about",
    freq: 24412645
  }, {
    text: "after",
    freq: 3748487
  }, {
    text: "at",
    freq: 5677513
  }, {
    text: "before",
    freq: 23681
  }, {
    text: "between",
    freq: 13408653
  }, {
    text: "till",
    freq: 125978
  }, {
    text: "while",
    freq: 8651
  }, {
    text: "when",
    freq: 8538860
  }, {
    text: "again",
    freq: 13589
  }, {
    text: "ever",
    freq: 130429
  }, {
    text: "now",
    freq: 13774292
  }, {
    text: "still",
    freq: 8296
  }, {
    text: "tomorrow",
    freq: 70951
  }, {
    text: "yesterday",
    freq: 68067
  }, {
    text: "second",
    freq: 4881148
  }, {
    text: "minute",
    freq: 1034571
  }, {
    text: "day",
    freq: 668130
  }, {
    text: "week",
    freq: 1814265
  }, {
    text: "month",
    freq: 46131
  }, {
    text: "year",
    freq: 25444
  }, {
    text: "fall",
    freq: 178611
  }, {
    text: "spring",
    freq: 1061186
  }, {
    text: "winter",
    freq: 978217
  }, {
    text: "summer",
    freq: 1292944
  }, {
    text: "night",
    freq: 4932488
  }, {
    text: "time",
    freq: 63613
  }, {
    text: "clock",
    freq: 25952
  }, {
    text: "first",
    freq: 83249
  }, {
    text: "second",
    freq: 4881148
  }, {
    text: "last",
    freq: 28944
  }, {
    text: "morning",
    freq: 10951
  }, {
    text: "night",
    freq: 4932488
  }, {
    text: "early",
    freq: 4401044
  }, {
    text: "late",
    freq: 210599
  }, {
    text: "slow",
    freq: 878858
  }, {
    text: "quick",
    freq: 849236
  }]
}, {
  name: "Animals",
  words: [{
    text: "animal",
    freq: 122948
  }, {
    text: "ant",
    freq: 69224
  }, {
    text: "bee",
    freq: 52663
  }, {
    text: "bird",
    freq: 111277
  }, {
    text: "cat",
    freq: 99795
  }, {
    text: "cow",
    freq: 24276
  }, {
    text: "dog",
    freq: 8870
  }, {
    text: "egg",
    freq: 27542
  }, {
    text: "fish",
    freq: 1064933
  }, {
    text: "fly",
    freq: 46041
  }, {
    text: "fowl",
    freq: 64377
  }, {
    text: "goat",
    freq: 106017
  }, {
    text: "horse",
    freq: 1396231
  }, {
    text: "insect",
    freq: 15522
  }, {
    text: "monkey",
    freq: 108223
  }, {
    text: "pig",
    freq: 31202
  }, {
    text: "rat",
    freq: 36362
  }, {
    text: "sheep",
    freq: 428939
  }, {
    text: "snake",
    freq: 39912
  }, {
    text: "sponge",
    freq: 8743
  }, {
    text: "worm",
    freq: 13749
  }, {
    text: "silk",
    freq: 32381
  }, {
    text: "worm",
    freq: 13749
  }]
}, {
  name: "Food and Drink",
  words: [{
    text: "apple",
    freq: 103789
  }, {
    text: "berry",
    freq: 89389
  }, {
    text: "bread",
    freq: 667388
  }, {
    text: "butter",
    freq: 289488
  }, {
    text: "cake",
    freq: 207672
  }, {
    text: "cheese",
    freq: 29925
  }, {
    text: "drink",
    freq: 39110
  }, {
    text: "egg",
    freq: 27542
  }, {
    text: "food",
    freq: 338994
  }, {
    text: "fish",
    freq: 1064933
  }, {
    text: "fruit",
    freq: 750453
  }, {
    text: "grain",
    freq: 414884
  }, {
    text: "meal",
    freq: 492915
  }, {
    text: "meat",
    freq: 36524
  }, {
    text: "milk",
    freq: 59244
  }, {
    text: "nut",
    freq: 98992
  }, {
    text: "orange",
    freq: 136408
  }, {
    text: "potato",
    freq: 112425
  }, {
    text: "rice",
    freq: 134935
  }, {
    text: "root",
    freq: 66516
  }, {
    text: "salt",
    freq: 10425
  }, {
    text: "seed",
    freq: 477034
  }, {
    text: "soup",
    freq: 27158
  }, {
    text: "sugar",
    freq: 81959
  }, {
    text: "water",
    freq: 28508
  }, {
    text: "wine",
    freq: 831390
  }, {
    text: "alcohol",
    freq: 75482
  }, {
    text: "beef",
    freq: 174734
  }, {
    text: "beer",
    freq: 42959
  }, {
    text: "champagne",
    freq: 25607
  }, {
    text: "chocolate",
    freq: 166080
  }, {
    text: "citron"
  }, {
    text: "coffee",
    freq: 63708
  }, {
    text: "cocktail",
    freq: 42459
  }, {
    text: "cognac",
    freq: 9104
  }, {
    text: "liqueur",
    freq: 9127
  }, {
    text: "macaroni",
    freq: 12353
  }, {
    text: "olive",
    freq: 155867
  }, {
    text: "omelet",
    freq: 7744
  }, {
    text: "rum",
    freq: 70243
  }, {
    text: "salad",
    freq: 23501
  }, {
    text: "sardine"
  }, {
    text: "tapioca",
    freq: 4737
  }, {
    text: "tea",
    freq: 8203
  }, {
    text: "toast",
    freq: 7788
  }, {
    text: "vanila"
  }, {
    text: "vodka",
    freq: 28751
  }, {
    text: "whisky",
    freq: 56956
  }]
}, {
  name: "Household",
  words: [{
    text: "building",
    freq: 2180924
  }, {
    text: "bread",
    freq: 667388
  }, {
    text: "butter",
    freq: 289488
  }, {
    text: "canvas",
    freq: 200575
  }, {
    text: "cloth",
    freq: 26153
  }, {
    text: "coal",
    freq: 435945
  }, {
    text: "cook",
    freq: 333456
  }, {
    text: "drink",
    freq: 39110
  }, {
    text: "family",
    freq: 5231544
  }, {
    text: "food",
    freq: 338994
  }, {
    text: "linen",
    freq: 161853
  }, {
    text: "meal",
    freq: 492915
  }, {
    text: "meat",
    freq: 36524
  }, {
    text: "milk",
    freq: 59244
  }, {
    text: "money",
    freq: 13289
  }, {
    text: "play",
    freq: 2599936
  }, {
    text: "rice",
    freq: 134935
  }, {
    text: "room",
    freq: 4915688
  }, {
    text: "silk",
    freq: 32381
  }, {
    text: "sleep",
    freq: 103129
  }, {
    text: "soup",
    freq: 27158
  }, {
    text: "step",
    freq: 301312
  }, {
    text: "sugar",
    freq: 81959
  }, {
    text: "vessel",
    freq: 588386
  }, {
    text: "walk",
    freq: 74979
  }, {
    text: "wash",
    freq: 45852
  }, {
    text: "wine",
    freq: 831390
  }, {
    text: "wool",
    freq: 181964
  }, {
    text: "basket",
    freq: 228783
  }, {
    text: "bath",
    freq: 79735
  }, {
    text: "bed",
    freq: 1960814
  }, {
    text: "bell",
    freq: 263568
  }, {
    text: "blade",
    freq: 193175
  }, {
    text: "board",
    freq: 1424662
  }, {
    text: "book",
    freq: 4548736
  }, {
    text: "boot",
    freq: 20130
  }, {
    text: "bottle",
    freq: 13008
  }, {
    text: "box",
    freq: 1391900
  }, {
    text: "brick",
    freq: 28481
  }, {
    text: "brush",
    freq: 36982
  }, {
    text: "bucket",
    freq: 9657
  }, {
    text: "bulb",
    freq: 74589
  }, {
    text: "button",
    freq: 43383
  }, {
    text: "cake",
    freq: 207672
  }, {
    text: "camera",
    freq: 41137
  }, {
    text: "card",
    freq: 601037
  }, {
    text: "cart",
    freq: 10490
  }, {
    text: "carriage",
    freq: 424622
  }, {
    text: "chain",
    freq: 55029
  }, {
    text: "cheese",
    freq: 29925
  }, {
    text: "chest",
    freq: 634326
  }, {
    text: "clock",
    freq: 25952
  }, {
    text: "coat",
    freq: 533438
  }, {
    text: "collar",
    freq: 9250
  }, {
    text: "comb",
    freq: 60766
  }, {
    text: "cord",
    freq: 271367
  }, {
    text: "cup",
    freq: 66689
  }, {
    text: "curtain",
    freq: 171722
  }, {
    text: "cushion",
    freq: 60770
  }, {
    text: "door",
    freq: 3553330
  }, {
    text: "drain",
    freq: 162960
  }, {
    text: "drawer",
    freq: 113645
  }, {
    text: "dress",
    freq: 28121
  }, {
    text: "flag",
    freq: 35693
  }, {
    text: "floor",
    freq: 1478234
  }, {
    text: "fork",
    freq: 26739
  }, {
    text: "frame",
    freq: 797083
  }, {
    text: "glove",
    freq: 64314
  }, {
    text: "hat",
    freq: 5771
  }, {
    text: "jewel",
    freq: 62032
  }, {
    text: "kettle",
    freq: 11940
  }, {
    text: "key",
    freq: 49941
  }, {
    text: "knife",
    freq: 401427
  }, {
    text: "knot",
    freq: 116782
  }, {
    text: "lock",
    freq: 39299
  }, {
    text: "map",
    freq: 116021
  }, {
    text: "match",
    freq: 569401
  }, {
    text: "nail",
    freq: 9503
  }, {
    text: "needle",
    freq: 14872
  }, {
    text: "oven",
    freq: 6049
  }, {
    text: "parcel",
    freq: 102051
  }, {
    text: "pen",
    freq: 59345
  }, {
    text: "pencil",
    freq: 12383
  }, {
    text: "picture",
    freq: 7802
  }, {
    text: "pin",
    freq: 23426
  }, {
    text: "pipe",
    freq: 29307
  }, {
    text: "plate",
    freq: 15548
  }, {
    text: "plow",
    freq: 40548
  }, {
    text: "pot",
    freq: 27968
  }, {
    text: "pump",
    freq: 21013
  }, {
    text: "rail",
    freq: 24123
  }, {
    text: "ring",
    freq: 77779
  }, {
    text: "rod",
    freq: 42210
  }, {
    text: "roof",
    freq: 537329
  }, {
    text: "screw",
    freq: 147363
  }, {
    text: "shelf",
    freq: 12643
  }, {
    text: "shirt",
    freq: 7620
  }, {
    text: "shoe",
    freq: 151115
  }, {
    text: "skirt",
    freq: 131595
  }, {
    text: "sock",
    freq: 20271
  }, {
    text: "spade",
    freq: 39818
  }, {
    text: "sponge",
    freq: 8743
  }, {
    text: "spoon",
    freq: 88853
  }, {
    text: "stamp",
    freq: 31692
  }, {
    text: "stick",
    freq: 483332
  }, {
    text: "stocking",
    freq: 39393
  }, {
    text: "table",
    freq: 200646
  }, {
    text: "thread",
    freq: 272290
  }, {
    text: "ticket",
    freq: 196999
  }, {
    text: "tray",
    freq: 123567
  }, {
    text: "trousers",
    freq: 123033
  }, {
    text: "umbrella",
    freq: 99475
  }, {
    text: "wall",
    freq: 254575
  }, {
    text: "watch",
    freq: 1105097
  }, {
    text: "wheel",
    freq: 413730
  }, {
    text: "whip",
    freq: 10703
  }, {
    text: "whistle",
    freq: 113078
  }, {
    text: "window",
    freq: 66740
  }, {
    text: "wire",
    freq: 448372
  }]
}, {
  name: "Clothes",
  words: [{
    text: "boot",
    freq: 20130
  }, {
    text: "button",
    freq: 43383
  }, {
    text: "coat",
    freq: 533438
  }, {
    text: "collar",
    freq: 9250
  }, {
    text: "dress",
    freq: 28121
  }, {
    text: "glove",
    freq: 64314
  }, {
    text: "hat",
    freq: 5771
  }, {
    text: "shirt",
    freq: 7620
  }, {
    text: "shoe",
    freq: 151115
  }, {
    text: "silk",
    freq: 32381
  }, {
    text: "skirt",
    freq: 131595
  }, {
    text: "sock",
    freq: 20271
  }, {
    text: "stocking",
    freq: 39393
  }, {
    text: "trousers",
    freq: 123033
  }, {
    text: "umbrella",
    freq: 99475
  }, {
    text: "watch",
    freq: 1105097
  }]
}, {
  name: "Tools",
  words: [{
    text: "band",
    freq: 744898
  }, {
    text: "blade",
    freq: 193175
  }, {
    text: "brush",
    freq: 36982
  }, {
    text: "bucket",
    freq: 9657
  }, {
    text: "cord",
    freq: 271367
  }, {
    text: "gun",
    freq: 701315
  }, {
    text: "hammer",
    freq: 36995
  }, {
    text: "hook",
    freq: 188226
  }, {
    text: "knife",
    freq: 401427
  }, {
    text: "knot",
    freq: 116782
  }, {
    text: "nail",
    freq: 9503
  }, {
    text: "needle",
    freq: 14872
  }, {
    text: "pin",
    freq: 23426
  }, {
    text: "pipe",
    freq: 29307
  }, {
    text: "plow",
    freq: 40548
  }, {
    text: "pump",
    freq: 21013
  }, {
    text: "ring",
    freq: 77779
  }, {
    text: "rod",
    freq: 42210
  }, {
    text: "screw",
    freq: 147363
  }, {
    text: "spade",
    freq: 39818
  }, {
    text: "wheel",
    freq: 413730
  }, {
    text: "wire",
    freq: 448372
  }]
}, {
  name: "Buildings",
  words: [{
    text: "bridge",
    freq: 206935
  }, {
    text: "building",
    freq: 2180924
  }, {
    text: "church",
    freq: 2179377
  }, {
    text: "hospital",
    freq: 280963
  }, {
    text: "house",
    freq: 40764
  }, {
    text: "library",
    freq: 647299
  }, {
    text: "prison",
    freq: 81551
  }, {
    text: "school",
    freq: 1127854
  }, {
    text: "structure",
    freq: 2187865
  }, {
    text: "station",
    freq: 171578
  }, {
    text: "store",
    freq: 905374
  }, {
    text: "street",
    freq: 1304376
  }, {
    text: "town",
    freq: 9831
  }, {
    text: "train",
    freq: 49558
  }, {
    text: "wall",
    freq: 254575
  }]
}, {
  name: "People",
  words: [{
    text: "baby",
    freq: 917514
  }, {
    text: "boy",
    freq: 165784
  }, {
    text: "daughter",
    freq: 6335
  }, {
    text: "family",
    freq: 5231544
  }, {
    text: "father",
    freq: 1185851
  }, {
    text: "female",
    freq: 136431
  }, {
    text: "friend",
    freq: 12989
  }, {
    text: "girl",
    freq: 118602
  }, {
    text: "male",
    freq: 5031
  }, {
    text: "man",
    freq: 873407
  }, {
    text: "married",
    freq: 47229
  }, {
    text: "mother",
    freq: 565336
  }, {
    text: "person",
    freq: 4740487
  }, {
    text: "relation",
    freq: 6485
  }, {
    text: "self",
    freq: 448840
  }, {
    text: "sister",
    freq: 1205670
  }, {
    text: "son",
    freq: 2628832
  }, {
    text: "woman",
    freq: 21180
  }, {
    text: "chief",
    freq: 9476
  }, {
    text: "cook",
    freq: 333456
  }, {
    text: "manager",
    freq: 5549
  }, {
    text: "porter",
    freq: 77090
  }, {
    text: "secretary",
    freq: 603654
  }, {
    text: "servant",
    freq: 582814
  }, {
    text: "work",
    freq: 522046
  }, {
    text: "roof",
    freq: 537329
  }]
}, {
  name: "Body Parts",
  words: [{
    text: "arm",
    freq: 28875
  }, {
    text: "body",
    freq: 18704
  }, {
    text: "bone",
    freq: 665619
  }, {
    text: "brain",
    freq: 154830
  }, {
    text: "chest",
    freq: 634326
  }, {
    text: "chin",
    freq: 37129
  }, {
    text: "ear",
    freq: 5516
  }, {
    text: "eye",
    freq: 1934252
  }, {
    text: "face",
    freq: 99837
  }, {
    text: "fat",
    freq: 63640
  }, {
    text: "feather",
    freq: 104888
  }, {
    text: "finger",
    freq: 19172
  }, {
    text: "foot",
    freq: 58713
  }, {
    text: "hair",
    freq: 1783923
  }, {
    text: "hand",
    freq: 7240007
  }, {
    text: "head",
    freq: 13142
  }, {
    text: "heart",
    freq: 231774
  }, {
    text: "horn",
    freq: 170392
  }, {
    text: "knee",
    freq: 343993
  }, {
    text: "leg",
    freq: 23530
  }, {
    text: "lip",
    freq: 7792
  }, {
    text: "mind",
    freq: 5470785
  }, {
    text: "mouth",
    freq: 1464296
  }, {
    text: "muscle",
    freq: 45034
  }, {
    text: "neck",
    freq: 38028
  }, {
    text: "nerve",
    freq: 26868
  }, {
    text: "nose",
    freq: 587004
  }, {
    text: "skin",
    freq: 1186639
  }, {
    text: "stomach",
    freq: 434913
  }, {
    text: "tail",
    freq: 420395
  }, {
    text: "throat",
    freq: 9636
  }, {
    text: "thumb",
    freq: 195201
  }, {
    text: "toe",
    freq: 8374
  }, {
    text: "tongue",
    freq: 22825
  }, {
    text: "tooth",
    freq: 144263
  }, {
    text: "wing",
    freq: 372827
  }, {
    text: "cough",
    freq: 8415
  }, {
    text: "dead",
    freq: 2241820
  }, {
    text: "death",
    freq: 433922
  }, {
    text: "disease",
    freq: 12289
  }, {
    text: "feeble",
    freq: 187385
  }, {
    text: "ill",
    freq: 105503
  }, {
    text: "pain",
    freq: 1771365
  }, {
    text: "sneeze",
    freq: 12832
  }]
}, {
  name: "Materials",
  words: [{
    text: "brass",
    freq: 24311
  }, {
    text: "copper",
    freq: 365857
  }, {
    text: "glass",
    freq: 92607
  }, {
    text: "gold",
    freq: 11054
  }, {
    text: "iron",
    freq: 174023
  }, {
    text: "leather",
    freq: 294861
  }, {
    text: "material",
    freq: 8433
  }, {
    text: "metal",
    freq: 727325
  }, {
    text: "silver",
    freq: 145544
  }, {
    text: "steel",
    freq: 577095
  }, {
    text: "tin",
    freq: 4563
  }, {
    text: "wood",
    freq: 1027426
  }, {
    text: "brick",
    freq: 28481
  }, {
    text: "canvas",
    freq: 200575
  }, {
    text: "cloth",
    freq: 26153
  }, {
    text: "coal",
    freq: 435945
  }, {
    text: "linen",
    freq: 161853
  }, {
    text: "silk",
    freq: 32381
  }, {
    text: "tree",
    freq: 1511579
  }, {
    text: "wool",
    freq: 181964
  }]
}, {
  name: "Transport",
  words: [{
    text: "boat",
    freq: 35399
  }, {
    text: "bridge",
    freq: 206935
  }, {
    text: "carriage",
    freq: 424622
  }, {
    text: "flight",
    freq: 616938
  }, {
    text: "harbor",
    freq: 156415
  }, {
    text: "sail",
    freq: 12124
  }, {
    text: "sea",
    freq: 2044026
  }, {
    text: "train",
    freq: 49558
  }, {
    text: "transport",
    freq: 111256
  }, {
    text: "plane",
    freq: 724055
  }, {
    text: "rail",
    freq: 24123
  }, {
    text: "river",
    freq: 13766
  }, {
    text: "road",
    freq: 12443
  }, {
    text: "wheel",
    freq: 413730
  }, {
    text: "whistle",
    freq: 113078
  }]
}, {
  name: "Business / Industry",
  words: [{
    text: "agreement",
    freq: 248666
  }, {
    text: "business",
    freq: 4675778
  }, {
    text: "committee",
    freq: 9585
  }, {
    text: "company",
    freq: 3188933
  }, {
    text: "competition",
    freq: 735365
  }, {
    text: "credit",
    freq: 8823
  }, {
    text: "debt",
    freq: 68784
  }, {
    text: "development",
    freq: 936856
  }, {
    text: "distribution",
    freq: 144152
  }, {
    text: "division",
    freq: 385324
  }, {
    text: "exchange",
    freq: 6621
  }, {
    text: "expansion",
    freq: 4114
  }, {
    text: "growth",
    freq: 11816
  }, {
    text: "harbor",
    freq: 156415
  }, {
    text: "industry",
    freq: 1487676
  }, {
    text: "instrument",
    freq: 30974
  }, {
    text: "interest",
    freq: 3769125
  }, {
    text: "invention",
    freq: 271553
  }, {
    text: "market",
    freq: 14015
  }, {
    text: "manager",
    freq: 5549
  }, {
    text: "money",
    freq: 13289
  }, {
    text: "office",
    freq: 752025
  }, {
    text: "oil",
    freq: 211701
  }, {
    text: "operation",
    freq: 1226939
  }, {
    text: "owner",
    freq: 711038
  }, {
    text: "payment",
    freq: 52974
  }, {
    text: "plant",
    freq: 180213
  }, {
    text: "produce",
    freq: 1571359
  }, {
    text: "profit",
    freq: 80653
  }, {
    text: "system",
    freq: 669563
  }, {
    text: "trade",
    freq: 18848
  }, {
    text: "transport",
    freq: 111256
  }]
}, {
  name: "Education",
  words: [{
    text: "art",
    freq: 2320761
  }, {
    text: "authority",
    freq: 1900758
  }, {
    text: "chalk",
    freq: 17503
  }, {
    text: "development",
    freq: 936856
  }, {
    text: "direction",
    freq: 43722
  }, {
    text: "education",
    freq: 2709372
  }, {
    text: "encylopedia"
  }, {
    text: "growth",
    freq: 11816
  }, {
    text: "history",
    freq: 3849492
  }, {
    text: "ink",
    freq: 16459
  }, {
    text: "language",
    freq: 3308722
  }, {
    text: "law",
    freq: 5257140
  }, {
    text: "learning",
    freq: 24830
  }, {
    text: "letter",
    freq: 287768
  }, {
    text: "music",
    freq: 1958877
  }, {
    text: "news",
    freq: 381168
  }, {
    text: "paint",
    freq: 364892
  }, {
    text: "paper",
    freq: 8564
  }, {
    text: "paste",
    freq: 17320
  }, {
    text: "pen",
    freq: 59345
  }, {
    text: "pencil",
    freq: 12383
  }, {
    text: "reading",
    freq: 337023
  }, {
    text: "reason",
    freq: 146713
  }, {
    text: "religion",
    freq: 329548
  }, {
    text: "rule",
    freq: 1965912
  }, {
    text: "say",
    freq: 216739
  }, {
    text: "science",
    freq: 1670720
  }, {
    text: "school",
    freq: 1127854
  }, {
    text: "scissors",
    freq: 56211
  }, {
    text: "square",
    freq: 963203
  }, {
    text: "stamp",
    freq: 31692
  }, {
    text: "talk",
    freq: 121006
  }, {
    text: "teaching",
    freq: 186555
  }, {
    text: "test",
    freq: 24974
  }, {
    text: "theory",
    freq: 516996
  }, {
    text: "thought",
    freq: 10167
  }, {
    text: "word",
    freq: 17447
  }, {
    text: "writing",
    freq: 2084722
  }]
}, {
  name: "Political",
  words: [{
    text: "act",
    freq: 1841639
  }, {
    text: "agreement",
    freq: 248666
  }, {
    text: "authority",
    freq: 1900758
  }, {
    text: "committee",
    freq: 9585
  }, {
    text: "control",
    freq: 22220
  }, {
    text: "country",
    freq: 5246909
  }, {
    text: "crime",
    freq: 945224
  }, {
    text: "debt",
    freq: 68784
  }, {
    text: "decision",
    freq: 164517
  }, {
    text: "discussion",
    freq: 26084
  }, {
    text: "distribution",
    freq: 144152
  }, {
    text: "division",
    freq: 385324
  }, {
    text: "education",
    freq: 2709372
  }, {
    text: "government",
    freq: 4603836
  }, {
    text: "history",
    freq: 3849492
  }, {
    text: "judge",
    freq: 382949
  }, {
    text: "language",
    freq: 3308722
  }, {
    text: "law",
    freq: 5257140
  }, {
    text: "meeting",
    freq: 10603
  }, {
    text: "nation",
    freq: 6230
  }, {
    text: "office",
    freq: 752025
  }, {
    text: "order",
    freq: 27680
  }, {
    text: "organization",
    freq: 12212
  }, {
    text: "political",
    freq: 17707
  }, {
    text: "power",
    freq: 624222
  }, {
    text: "property",
    freq: 218337
  }, {
    text: "protest",
    freq: 333377
  }, {
    text: "punishment",
    freq: 571707
  }, {
    text: "record",
    freq: 8666
  }, {
    text: "religion",
    freq: 329548
  }, {
    text: "representative",
    freq: 80656
  }, {
    text: "secretary",
    freq: 603654
  }, {
    text: "society",
    freq: 19077
  }, {
    text: "tax",
    freq: 1624071
  }]
}, {
  name: "War",
  words: [{
    text: "army",
    freq: 1579088
  }, {
    text: "attack",
    freq: 44315
  }, {
    text: "boat",
    freq: 35399
  }, {
    text: "company",
    freq: 3188933
  }, {
    text: "control",
    freq: 22220
  }, {
    text: "country",
    freq: 5246909
  }, {
    text: "crush",
    freq: 108416
  }, {
    text: "damage",
    freq: 32504
  }, {
    text: "death",
    freq: 433922
  }, {
    text: "destruction",
    freq: 38093
  }, {
    text: "division",
    freq: 385324
  }, {
    text: "earth",
    freq: 11311
  }, {
    text: "effect",
    freq: 3533205
  }, {
    text: "event",
    freq: 77349
  }, {
    text: "fight",
    freq: 48650
  }, {
    text: "fire",
    freq: 222948
  }, {
    text: "flame",
    freq: 20969
  }, {
    text: "general",
    freq: 5480
  }, {
    text: "gun",
    freq: 701315
  }, {
    text: "light",
    freq: 4631560
  }, {
    text: "force",
    freq: 3012260
  }, {
    text: "harbor",
    freq: 156415
  }, {
    text: "land",
    freq: 3581177
  }, {
    text: "map",
    freq: 116021
  }, {
    text: "military",
    freq: 2056933
  }, {
    text: "operation",
    freq: 1226939
  }, {
    text: "order",
    freq: 27680
  }, {
    text: "organization",
    freq: 12212
  }, {
    text: "peace",
    freq: 14945
  }, {
    text: "plane",
    freq: 724055
  }, {
    text: "position",
    freq: 10447
  }, {
    text: "powder",
    freq: 304612
  }, {
    text: "power",
    freq: 624222
  }, {
    text: "push",
    freq: 410709
  }, {
    text: "range",
    freq: 1952732
  }, {
    text: "river",
    freq: 13766
  }, {
    text: "road",
    freq: 12443
  }, {
    text: "sea",
    freq: 2044026
  }, {
    text: "smash",
    freq: 38894
  }, {
    text: "support",
    freq: 11192
  }, {
    text: "vessel",
    freq: 588386
  }, {
    text: "war",
    freq: 46969
  }]
}, {
  name: "Agriculture / Nature",
  words: [{
    text: "air",
    freq: 43404
  }, {
    text: "animal",
    freq: 122948
  }, {
    text: "cheese",
    freq: 29925
  }, {
    text: "cloud",
    freq: 54832
  }, {
    text: "cotton",
    freq: 395986
  }, {
    text: "dust",
    freq: 553796
  }, {
    text: "earth",
    freq: 11311
  }, {
    text: "field",
    freq: 14707
  }, {
    text: "farm",
    freq: 702630
  }, {
    text: "fruit",
    freq: 750453
  }, {
    text: "garden",
    freq: 219957
  }, {
    text: "grain",
    freq: 414884
  }, {
    text: "growth",
    freq: 11816
  }, {
    text: "ice",
    freq: 745738
  }, {
    text: "land",
    freq: 3581177
  }, {
    text: "leaf",
    freq: 336326
  }, {
    text: "leather",
    freq: 294861
  }, {
    text: "meat",
    freq: 36524
  }, {
    text: "milk",
    freq: 59244
  }, {
    text: "mist",
    freq: 12377
  }, {
    text: "moon",
    freq: 6526
  }, {
    text: "mountain",
    freq: 239358
  }, {
    text: "natural",
    freq: 15433
  }, {
    text: "nut",
    freq: 98992
  }, {
    text: "plant",
    freq: 180213
  }, {
    text: "plow",
    freq: 40548
  }, {
    text: "price",
    freq: 1894789
  }, {
    text: "process",
    freq: 293800
  }, {
    text: "produce",
    freq: 1571359
  }, {
    text: "rain",
    freq: 737843
  }, {
    text: "range",
    freq: 1952732
  }, {
    text: "rice",
    freq: 134935
  }, {
    text: "river",
    freq: 13766
  }, {
    text: "road",
    freq: 12443
  }, {
    text: "salt",
    freq: 10425
  }, {
    text: "sand",
    freq: 605275
  }, {
    text: "seed",
    freq: 477034
  }, {
    text: "sky",
    freq: 60483
  }, {
    text: "slope",
    freq: 28296
  }, {
    text: "snow",
    freq: 702423
  }, {
    text: "spade",
    freq: 39818
  }, {
    text: "star",
    freq: 528460
  }, {
    text: "stream",
    freq: 778420
  }, {
    text: "sun",
    freq: 10540
  }, {
    text: "thunder",
    freq: 189698
  }, {
    text: "water",
    freq: 28508
  }, {
    text: "weather",
    freq: 51054
  }, {
    text: "wind",
    freq: 105538
  }]
}, {
  name: "Mathematics",
  words: [{
    text: "addition",
    freq: 24221
  }, {
    text: "amount",
    freq: 67701
  }, {
    text: "division",
    freq: 385324
  }, {
    text: "greater",
    freq: 2635846
  }, {
    text: "less",
    freq: 154989
  }, {
    text: "number",
    freq: 27681
  }, {
    text: "power",
    freq: 624222
  }, {
    text: "product",
    freq: 10902
  }, {
    text: "root",
    freq: 66516
  }, {
    text: "times",
    freq: 736908
  }, {
    text: "angle",
    freq: 34366
  }, {
    text: "arch",
    freq: 194335
  }, {
    text: "ball",
    freq: 6013
  }, {
    text: "circle",
    freq: 772376
  }, {
    text: "cord",
    freq: 271367
  }, {
    text: "curve",
    freq: 540127
  }, {
    text: "line",
    freq: 261426
  }, {
    text: "plane",
    freq: 724055
  }, {
    text: "point",
    freq: 350080
  }, {
    text: "square",
    freq: 963203
  }, {
    text: "solid",
    freq: 67974
  }, {
    text: "square",
    freq: 963203
  }]
}];
var ogden = {
  categories: categories
};

exports.fetchData = fetchData;
exports.makeParser = makeParser;
exports.ogden = ogden;
exports.sources = sources;
//# sourceMappingURL=lingua-scraper.cjs.development.js.map
