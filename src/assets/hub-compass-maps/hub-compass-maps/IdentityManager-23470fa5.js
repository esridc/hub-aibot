import { dL as W, dO as n, e5 as s$3, dP as L$1, a1 as e$1, a2 as y, dS as e$2, a3 as a$1, J as l$1, eV as e$3, cV as l$2, gb as $, _ as n$1, c2 as L$2, gc as l$3, C as C$1, R as w, f as s$4, bI as a$2, gd as F, O as j$1, fD as I, ge as et, B as r$1, fE as v, gf as t$1, X as s$5, gg as K, gh as J, gi as t$2, gj as _, fH as kt, cr as n$2, gk as o } from './hub-compass-map-f4225e12.js';
import { e as e$4 } from './widget-68c4e693.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a="esri-identity-form",p$2={base:a,group:`${a}__group`,label:`${a}__label`,footer:`${a}__footer`,esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},l="ArcGIS Online";let d$1=class extends W{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1;}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n$1,messages:a}=this,d=n("div",{class:p$2.group},s$3(n$1?a.oAuthInfo:a.info,{server:e&&/\.arcgis\.com/i.test(e)?l:e,resource:`(${t||a.lblItem})`})),c=n$1?null:n("div",{class:p$2.group,key:"username"},n("label",{class:p$2.label},a.lblUser,n("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:L$1,"data-node-ref":"_usernameInputNode",class:p$2.esriInput}))),m=n$1?null:n("div",{class:p$2.group,key:"password"},n("label",{class:p$2.label},a.lblPwd,n("input",{value:"",required:!0,type:"password",bind:this,afterCreate:L$1,"data-node-ref":"_passwordInputNode",class:p$2.esriInput}))),h=n("div",{class:this.classes(p$2.group,p$2.footer)},n("input",{type:"submit",disabled:!!o,value:o?a.lblSigning:a.lblOk,class:p$2.esriButton}),n("input",{type:"button",value:a.lblCancel,bind:this,onclick:this._cancel,class:this.classes(p$2.esriButton,p$2.esriButtonSecondary)})),b=s?n("div",null,s.details&&s.details.httpStatus?a.invalidUser:a.noAuthService):null;return n("form",{class:p$2.base,bind:this,onsubmit:this._submit},d,b,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel");}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e);}};e$1([y(),e$2("esri/identity/t9n/identity")],d$1.prototype,"messages",void 0),e$1([y()],d$1.prototype,"signingIn",void 0),e$1([y()],d$1.prototype,"server",void 0),e$1([y()],d$1.prototype,"resource",void 0),e$1([y()],d$1.prototype,"error",void 0),e$1([y()],d$1.prototype,"oAuthPrompt",void 0),d$1=e$1([a$1("esri.identity.IdentityForm")],d$1);const c=d$1;

/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/*!
* focus-trap 7.4.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};
var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event]
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !isFocusable(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes
      var focusableNodes = focusable(container, config.tabbableOptions);
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          // NOTE: If tabindex is positive (in order to manipulate the tab order separate
          //  from the DOM order), this __will not work__ because the list of focusableNodes,
          //  while it contains tabbable nodes, does not sort its nodes in any order other
          //  than DOM order, because it can't: Where would you place focusable (but not
          //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
          // Support for positive tabindex is already broken and hard to manage (possibly
          //  not supportable, TBD), so this isn't going to make things worse than they
          //  already are, and at least makes things better for the majority of cases where
          //  tabindex is either 0/unset or negative.
          // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
          var nodeIdx = focusableNodes.findIndex(function (n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return undefined;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function (n) {
              return isTabbable(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return isTabbable(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target, e) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var target = getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };

  var checkKey = function checkKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
      return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 ? void 0 : onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 ? void 0 : onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 ? void 0 : onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 ? void 0 : onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 ? void 0 : onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 ? void 0 : onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 ? void 0 : onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 ? void 0 : onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d="esri-identity-modal",p$1={base:d,open:`${d}--open`,closed:`${d}--closed`,title:`${d}__title`,dialog:`${d}__dialog`,content:`${d}__content`,closeButton:`${d}__close-button`,iconClose:"esri-icon-close"};let u=class extends W{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._focusTrap=null,this._close=()=>{this.open=!1;},document.body.appendChild(this.container),this.addHandles(l$1((()=>this.open),(()=>this._toggleFocusTrap())));}destroy(){this._destroyFocusTrap();}get title(){return this.messages?.auth.signIn}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n$1={[p$1.open]:r,[p$1.closed]:!r},a=n("button",{class:p$1.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close,type:"button"},n("span",{"aria-hidden":"true",class:p$1.iconClose})),l=`${t}_title`,d=`${t}_content`,u=s?n("h1",{id:l,class:p$1.title},s):null,h=r?n("div",{bind:this,class:p$1.dialog,role:"dialog","aria-labelledby":l,"aria-describedby":d,afterCreate:this._createFocusTrap},a,u,this._renderContent(d)):null;return n("div",{tabIndex:-1,class:this.classes(p$1.base,n$1)},h)}_destroyFocusTrap(){this._focusTrap?.deactivate({onDeactivate:()=>{}}),this._focusTrap=null;}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate());}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=createFocusTrap(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap();}));this.addHandles(e$3((()=>cancelAnimationFrame(o))));}_renderContent(t){const e=this.content;return "string"==typeof e?n("div",{class:p$1.content,id:t,innerHTML:e}):e$4(e)?n("div",{class:p$1.content,id:t},e.render()):e instanceof HTMLElement?n("div",{class:p$1.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e);}};e$1([y({readOnly:!0})],u.prototype,"container",void 0),e$1([y()],u.prototype,"content",void 0),e$1([y()],u.prototype,"open",void 0),e$1([y(),e$2("esri/t9n/common")],u.prototype,"messages",void 0),e$1([y()],u.prototype,"title",null),u=e$1([a$1("esri.identity.IdentityModal")],u);const h=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init();}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else if(this.expires){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0);}}return t}save(){if(!this.storage)return !1;const e=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(e));}catch(i){return console.warn(i),!1}return !0}return !1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s&&s.appId&&s.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else {const s=new XMLHttpRequest;s.open("POST",t),s.send(e);}}if(s&&s.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(t,JSON.stringify(e));}catch(i){console.log(i);}}}s&&(s._oAuthCred=null,this.oAuthInfo=null);}_init(){const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId));}}_load(){let e={};if(this.storage){const i=this.storage.getItem(t);if(i)try{e=JSON.parse(i);}catch(s){console.warn(s);}}return e}}e.prototype.declaredClass="esri.identity.OAuthCredential";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var p;let s$2=p=class extends l$2{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null;}clone(){return p.fromJSON(this.toJSON())}};e$1([y({json:{write:!0}})],s$2.prototype,"appId",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"authNamespace",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"expiration",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"flowType",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"forceLogin",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"forceUserId",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"locale",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"minTimeUntilExpiration",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"popup",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"popupCallbackUrl",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"popupWindowFeatures",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"portalUrl",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"preserveUrlHash",void 0),e$1([y({json:{write:!0}})],s$2.prototype,"userId",void 0),s$2=p=e$1([a$1("esri.identity.OAuthInfo")],s$2);const i$1=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let s$1=class extends l$2{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null;}};e$1([y({json:{write:!0}})],s$1.prototype,"adminTokenServiceUrl",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"currentVersion",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"hasPortal",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"hasServer",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"owningSystemUrl",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"owningTenant",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"server",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"shortLivedTokenValidity",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"tokenServiceUrl",void 0),e$1([y({json:{write:!0}})],s$1.prototype,"webTierAuth",void 0),s$1=e$1([a$1("esri.identity.ServerInfo")],s$1);const i=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const C={},b=e=>{const t=new $(e.owningSystemUrl).host,r=new $(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},D=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let q=null,j=null;try{q=window.localStorage,j=window.sessionStorage;}catch{}class E extends n$1{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.formConstructor=c,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=L$2(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e);}));}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server);}));}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1);}this.oAuthInfos=t.concat(e);}else this.oAuthInfos=e;}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i$1=this.findServerInfo(t),o=!0;i$1||(i$1=new i,i$1.server=this._getServerInstanceRoot(t),r?i$1.hasServer=!0:(i$1.tokenServiceUrl=this._getTokenSvcUrl(t),i$1.hasPortal=!0),this.registerServers([i$1])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),o=!1):(s=new L({userId:e.userId,server:i$1.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),o||s.refreshServerTokens();}toJSON(){return l$3({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new i(t));})),e.length&&this.registerServers(e);}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new i$1(t));})),e.length&&this.registerOAuthInfos(e);}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new L(e)).emitTokenChange(),this.credentials.push(e));}));}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){if(!e)return;let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s,o=!0;t&&(r=!!t.token,s=t.error,o=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=new AbortController,a=C$1();if(t.signal&&w(t.signal,(()=>{n.abort();})),w(n,(()=>{a.reject(new s$4("identity-manager:user-aborted","ABORTED"));})),a$2(n))return a.promise;t.signal=n.signal;const h=this._isAdminResource(e),u=r?this.findCredential(e):null;let p;if(u&&s&&s.details&&498===s.details.httpStatus)u.destroy();else if(u)return p=new s$4("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(p),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else {const t=this._getTokenSvcUrl(e);if(!t)return p=new s$4("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(p),a.promise;g=new i,g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g]);}return g.hasPortal&&void 0===g._selfReq&&(o||F(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const o=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new $(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,p,g,m;t&&(m=this.tokenValidity||a||this._defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,p=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new $(d.toLowerCase()),e.webTierAuth&&r?.serverUrl&&!g&&"http"===n.scheme&&(F(n.uri,d,!0)||"https"===u.scheme&&n.host===u.host&&"7080"===n.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:t?.username,password:t?.password,serverUrl:l,token:c,expiration:m,referer:h||o?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:p,...r?.ioArgs};o||(v.withCredentials=!1);return j$1(d,v).then((r=>{const s=r.data;if(!s||!s.token)return new s$4("identity-manager:authentication-failed","Unable to generate token");const o=e.server;return C[o]||(C[o]={}),t&&(C[o][t.username]=t.password),s.validity=m,s}))}isBusy(){return !!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,r){let o=!1;return this.getCredential(e,{prompt:!1}).then((n=>{let a;const h={f:"json"};if("portal"===n.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))a=n.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else {if(!n.token)return {credential:n};a=n.server+"/sharing/rest";}else {if(!n.token)return {credential:n};a=n.server+"/rest/services";}return n.token&&(h.token=n.token),j$1(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new s$4("identity-manager:not-authorized",`You are currently signed in as: '${n.userId}'.`,e.data);return o=!!e.data.viewOnlyUserTypeApp,{credential:n}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw n.destroy(),new s$4("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new s$4("identity-manager:invalid-request");return {credential:n}}))})).then((e=>({credential:e.credential,viewOnly:o})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(I(e)));}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e;}setProtocolErrorHandler(e){this._protocolFunc=e;}signIn(e,t,r={}){const s=C$1(),o=()=>{h$1?.remove(),d?.remove(),p?.remove(),a?.destroy(),this.dialog?.destroy(),this.dialog=a=h$1=d=p=null;},n=()=>{o(),this._oAuthDfd=null,s.reject(new s$4("identity-manager:user-aborted","ABORTED"));};r.signal&&w(r.signal,(()=>{n();}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new h,this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h$1=a.on("cancel",n),d=l$1((()=>this.dialog.open),n),p=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{o();const n=new L({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(n);})).catch((e=>{a.error=e,a.signingIn=!1;}));}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=C$1();const o=this._oAuthDfd;let n;s?.signal&&w(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&f();})),o.resUrl_=e,o.sinfo_=t,o.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));n=et(e),a.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=et(e),a.save()||(a.codeVerifier=n=null);}else a.codeVerifier=null;let h$1,d,p,_;this._getCodeChallenge(n).then((i=>{const o=!s||!1!==s.oAuthPopupConfirmation;r.popup&&o?(h$1=new this.formConstructor,h$1.oAuthPrompt=!0,h$1.server=t.server,this.dialog=new h,this.dialog.content=h$1,this.dialog.open=!0,this.emit("dialog-create"),d=h$1.on("cancel",f),p=l$1((()=>this.dialog.open),f),_=h$1.on("submit",(()=>{g(),this._doOAuthSignIn(e,t,r,i);}))):this._doOAuthSignIn(e,t,r,i);}));const f=()=>{g(),this._oAuthDfd=null,o.reject(new s$4("identity-manager:user-aborted","ABORTED"));},g=()=>{d?.remove(),p?.remove(),_?.remove(),h$1?.destroy(),this.dialog?.destroy(),this.dialog=null;};return o.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy();}));}this.emit("credentials-destroy");}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=r$1(window,"message",(t=>{if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===t.data?.type){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin);})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin);}));}}));}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null);}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=I(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),t.state.portalUrl&&(this._oAuthLocationParams=t,r=!0);}catch{}else if(t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0,t.state)))try{t.state=JSON.parse(t.state);}catch{}r&&(window.location.hash=t.state?.hash||"");}let t=window.location.search;if(t){"?"===t.charAt(0)&&(t=t.substring(1));const e=I(t);let r=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,r=!0);}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(r=!0,e.state)))try{e.state=JSON.parse(e.state);}catch{}if(r){const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e];}));const r=v(t),s=window.location.pathname+(r?`?${r}`:"")+(e.state?.hash||"");window.history.replaceState(window.history.state,"",s);}}}_getOAuthToken(e,t,r,i,o){return e=e.replace(/^http:/i,"https:"),j$1(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&o?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:o}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e);return crypto.subtle.digest("SHA-256",t).then((e=>et(new Uint8Array(e))))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new s$4("identity-manager:user-aborted","ABORTED");this._errbackFunc(e);}}_findCredential(e,t){let r,s,i,o,n=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],i=this.findServerInfo(r.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,r.userId):void 0,n=this._getIdenticalSvcIdx(e,r),!a)return -1===n&&r.resources.push(e),this._addResource(e,o),r;-1!==n&&(r.resources.splice(n,1),this._removeResource(e,o));}else {let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,i=this.findServerInfo(t.server),s=i&&i.owningSystemUrl,o=s?this.findCredential(s,t.userId):void 0,n=r,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,o));else if(t)return this._addResource(e,o),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e);}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1));}_useProxy(e,t){return t&&t.isAdmin&&!F(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!F(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new $(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return -1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||t$1(t)||(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return "/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const r=(s$5.request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return -1!==s&&(e=e.substring(s+r.length+1)),e=K(e),L$2(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replaceAll(e,"$1")===i.replaceAll(e,"$1");}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new $(e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return !i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||s$5.portalUrl&&(i=F(r,s$5.portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,o)=>{-1===r&&i.regex.test(e)&&(r=o),-1===s&&i.regex.test(t)&&(s=o);}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&b(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0);}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=j$1(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new $(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:");}return t}if(e.toLowerCase().includes("premium.arcgisonline.com"))return "https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const o=new L({userId:i.username,server:r.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=o.userId,s.storage=i.persist?q:j,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=o.userId,s.ssl=o.ssl,s.save(),o}))}const i=new L({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?q:j,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){const t=this._oAuthDfd;if(this._oAuthDfd=null,t)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle?.remove(),e.error){const r="access_denied"===e.error,s=new s$4(r?"identity-manager:user-aborted":"identity-manager:authentication-failed",r?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);t.reject(s);}else this._processOAuthResponseParams(e,t.oinfo_,t.sinfo_).then((e=>{t.resolve(e);})).catch((e=>{t.reject(e);}));}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(I(e)));}_exchangeToken(e,t,r){return j$1(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),j$1(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return j$1(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return !(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||F(r,e,!0)))}_checkProtocol(e,t,r,s){let o=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&J(n)&&(o=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!o)){r(new s$4("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."));}return o}_enqueue(e,t,r,s,i,o){return s||(s=C$1()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e$1){this._busy=e$1,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e$1.options_&&e$1.options_.resource,s=e$1.resUrl_,i=e$1.refresh_;let o=!1;this.credentials.includes(t)||(i&&this.credentials.includes(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_));}})),e$1.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e);})),this._busy=e$1.resUrl_=e$1.sinfo_=e$1.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},r=t=>{e$1.reject(t),this._busy=e$1.resUrl_=e$1.sinfo_=e$1.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},s=(o,a,h,l)=>{const d=e$1.sinfo_,u=!e$1.options_||!1!==e$1.options_.prompt,p=d.hasPortal&&this._findOAuthInfo(e$1.resUrl_);let f,g;if(o)t(new L({userId:o,server:d.server,token:h||null,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&this._appUrlObj.query?.["arcgis-auth-origin"]&&this._appUrlObj.query?.["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e$1.resUrl_)){window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=r$1(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new s$4("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new L(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new s$4("identity-manager:credential-request-failed","Parent application's token has expired.")):r(s$4.fromJSON(e.data.error))));}));w(e$1.options_?.signal,(()=>{s.remove();}));}else if(p){let o=p._oAuthCred;if(!o){const e$1=new e(p,q),t=new e(p,j);e$1.isValid()&&t.isValid()?e$1.expires>t.expires?(o=e$1,t.destroy()):(o=t,e$1.destroy()):o=e$1.isValid()?e$1:t,p._oAuthCred=o;}if(o.isValid()){f=new L({userId:o.userId,server:d.server,token:o.token,expires:o.expires,ssl:o.ssl,_oAuthCred:o});const r=p.appId!==o.appId&&this._doPortalSignIn(e$1.resUrl_);r||o.refreshToken?(e$1._pendingDfd=o.refreshToken?this._getOAuthToken(d.server,o.refreshToken,o.appId).then((e=>(f.expires=Date.now()+1e3*e.expires_in,f.token=e.access_token,f))):Promise.resolve(f),e$1._pendingDfd.then((e=>r?this._exchangeToken(e.server,p.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e);})).catch((()=>{o?.destroy(),s();}))):t(f);}else if(this._oAuthLocationParams&&this._hasSameServerInstance(p.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===o.stateUID&&o.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e$1._pendingDfd=this._processOAuthResponseParams(s,p,d).then((e=>{t(e);})).catch(r);}else {const s=()=>{u?e$1._pendingDfd=this.oAuthSignIn(e$1.resUrl_,d,p,e$1.options_).then(t,r):(g=new s$4("identity-manager:not-authenticated","User is not signed in."),r(g));};this._doPortalSignIn(e$1.resUrl_)?e$1._pendingDfd=this._getPlatformSelf(d.server,p.appId).then((e=>{F(e.portalUrl,this._appOrigin,!0)?(f=new L({userId:e.username,server:d.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(f)):s();})).catch(s):s();}}else if(u){if(this._checkProtocol(e$1.resUrl_,d,r,e$1.admin_)){let s=e$1.options_;e$1.admin_&&(s=s||{},s.isAdmin=!0),e$1._pendingDfd=this.signIn(e$1.resUrl_,d,s).then(t,r);}}else g=new s$4("identity-manager:not-authenticated","User is not signed in."),r(g);},o=()=>{const s=e$1.sinfo_,i=s.owningSystemUrl,o=e$1.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e$1.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e$1.resUrl_,l.userId);if(i)t(i);else if(D(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new L(e));}else {(e$1._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e$1.resUrl_,token:l.token,signal:e$1.options_.signal,ssl:l.ssl})).then((r=>{t(new L({userId:l?.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e$1.admin_,validity:r.validity}));}),r);}}else {this._busy=null,n&&(e$1.options_.token=null);(e$1._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e$1.resUrl_,owningTenant:s.owningTenant,signal:e$1.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e$1.resUrl_,e$1.sinfo_,e$1.options_,e$1,e$1.admin_);}),(t=>{e$1.resUrl_=e$1.sinfo_=e$1.refresh_=null,e$1.reject(t);}));}};this._errbackFunc=r;const a=e$1.sinfo_.owningSystemUrl,l=this._isServerRsrc(e$1.resUrl_),d=e$1.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e$1.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=(t$2("authInfo.tokenServicesUrl",t)||t$2("authInfo.tokenServiceUrl",t)||t$2("tokenServiceUrl",t))??null,r.shortLivedTokenValidity=t$2("authInfo.shortLivedTokenValidity",t)??null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e);}l&&r.owningSystemUrl?o():s();}),(()=>{e$1.sinfo_._restInfoPms=null;const t=new s$4("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t);})):l&&a?o():e$1.sinfo_._selfReq?e$1.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,o,n;return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e$1.sinfo_.currentVersion=n),e$1.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e$1.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e$1.resUrl_)?this._generateOAuthInfo({portalUrl:e$1.sinfo_.server,customBaseUrl:o,owningTenant:e$1.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e$1.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s();})):s();}_generateOAuthInfo(e){let t,r=null,i=e.portalUrl;const o=e.customBaseUrl,n=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null;}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=j$1(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this._defaultOAuthInfo=new i$1({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"});}))):t=Promise.resolve(),t.then((()=>{if(this._defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),j$1(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this._defaultOAuthInfo.appId,redirect_uri:_(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone();e.data.urlKey&&o?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+o:t.portalUrl=i,t.popup=window!==window.top||!(F(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t);}}))}))}_doOAuthSignIn(e,t,r,s){const o=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),o.stateUID&&(a.uid=o.stateUID);const h={client_id:r.appId,response_type:o.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!o.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),o.codeVerifier&&(h.code_challenge=s||o.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+v(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new s$4("identity-manager:user-aborted","ABORTED");e.reject(t);}}}),500),this._oAuthOnPopupHandle=r$1(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail);}));else {const e=new s$4("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e);}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c;}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return _(e.popupCallbackUrl);if(t){const e=L$2(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t];})),kt(e.path,e.query)}return r}}E.prototype.declaredClass="esri.identity.IdentityManagerBase";let L=class extends n$1.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred);}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now());}refreshToken(){const e=n$2.findServerInfo(this.server),t=e&&e.owningSystemUrl,s=!!t&&"server"===this.scope,i=s&&D(e,n$2._legacyFed),o=e.webTierAuth,n=o&&n$2.normalizeWebTierAuth,a=C[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=s?n$2.findServerInfo(t):null,u={username:this.userId,password:h};if(o&&!n)return;s&&!d&&n$2.serverInfos.some((e=>(n$2._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d?n$2.findCredential(d.server,this.userId):null;if(!s||p){if(!i){if(s)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(n)u=null,l={ssl:this.ssl};else {if(!h){let t;return c&&(c=n$2._sanitizeUrl(c),this._enqueued=1,t=n$2._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens();})).catch((()=>{this._enqueued=0;}))),t}this.isAdmin&&(l={isAdmin:!0});}return n$2.generateToken(s?d:e,s?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens();})).catch((()=>{}))}p?.refreshToken();}}refreshServerTokens(){"portal"===this.scope&&n$2.credentials.forEach((e=>{const t=n$2.findServerInfo(e.server),s=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&s&&"server"===e.scope&&(n$2._hasSameServerInstance(this.server,s)||n$2._isIdProvider(s,this.server))&&(D(t,n$2._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken());}));}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&n$2.findServerInfo(this.server),s=t&&t.owningSystemUrl,i=s&&n$2.findServerInfo(s);!1===e||s&&"portal"!==this.scope&&(!i||!i.webTierAuth||n$2.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change");}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=n$2.credentials.indexOf(this);e>-1&&n$2.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy");}toJSON(){const e=l$3({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r);}};e$1([y()],L.prototype,"creationTime",void 0),e$1([y()],L.prototype,"expires",void 0),e$1([y()],L.prototype,"isAdmin",void 0),e$1([y()],L.prototype,"oAuthState",void 0),e$1([y()],L.prototype,"resources",void 0),e$1([y()],L.prototype,"scope",void 0),e$1([y()],L.prototype,"server",void 0),e$1([y()],L.prototype,"ssl",void 0),e$1([y()],L.prototype,"token",void 0),e$1([y()],L.prototype,"tokenRefreshBuffer",void 0),e$1([y()],L.prototype,"userId",void 0),e$1([y()],L.prototype,"validity",void 0),L=e$1([a$1("esri.identity.Credential")],L);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends E{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;o(s);

export default s;

//# sourceMappingURL=IdentityManager-23470fa5.js.map