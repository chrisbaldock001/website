!function(){function n(t,e,r){function i(u,c){if(!e[u]){if(!t[u]){var s="function"==typeof require&&require;if(!c&&s)return s(u,!0);if(o)return o(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=e[u]={exports:{}};t[u][0].call(a.exports,function(n){return i(t[u][1][n]||n)},a,a.exports,n,t,e,r)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}return n}()({1:[function(n,t,e){"use strict";var r=void 0,i=["index.html","./","/","offline.html","assets/css/main.css","assets/js/index.js"],o=["http://localhost:8090"],u=o.indexOf(window.location.origin)>-1;console.log(window),window.addEventListener("install",function(n){n.waitUntil(r.open("precache-v1").then(function(n){return n.addAll(i)}).then(window.skipWaiting()))}),window.addEventListener("activate",function(n){var t=["precache-v1","runtime"];n.waitUntil(r.keys().then(function(n){return n.filter(function(n){return!t.includes(n)})}).then(function(n){return Promise.all(n.map(function(n){return r.delete(n)}))}).then(function(){return window.clients.claim()}))}),window.addEventListener("fetch",function(n){if(n.request.url.split(".").pop(),n.request.url.startsWith(window.location.origin)&&"GET"===n.request.method&&!u){var t=(new URL(n.request.url),fetch(n.request).then(function(t){var e=t.clone();return t.ok&&r.open("runtime").then(function(t){t.put(n.request,e)}),t}).catch(function(){return(void 0).match("offline.html")})),e=r.open("runtime").then(function(e){return e.match(n.request).then(function(n){return n||t})}).catch(function(n){return t});n.respondWith(e)}})},{}]},{},[1]);