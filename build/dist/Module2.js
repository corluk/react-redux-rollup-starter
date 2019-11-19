(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
    (global = global || self, factory(global.React, global.ReactDOM));
}(this, function (React, ReactDOM) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Module2 = /** @class */ (function (_super) {
        __extends(Module2, _super);
        function Module2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module2.prototype.render = function () {
            return React.createElement("div", null, " This is Module 2 ");
        };
        return Module2;
    }(React.Component));
    ReactDOM.render(React.createElement(Module2, null), document.getElementById("test"));

}));
