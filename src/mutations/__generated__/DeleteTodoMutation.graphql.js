/**
 * @generated SignedSource<<b7e5c7590c0935dd40639947f437f04d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTodoInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteTodoMutation$variables = {|
  input: DeleteTodoInput,
|};
export type DeleteTodoMutation$data = {|
  +deleteTodo: ?{|
    +todo: {|
      +id: string,
    |},
  |},
|};
export type DeleteTodoMutation = {|
  variables: DeleteTodoMutation$variables,
  response: DeleteTodoMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "kind": "LinkedField",
    "name": "deleteTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b60bb36e33b3317b6d6e43fcd23b259e",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    todo {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "f52372375136d7fe05f7db741cee22c6";

module.exports = ((node/*: any*/)/*: Mutation<
  DeleteTodoMutation$variables,
  DeleteTodoMutation$data,
>*/);
