/**
 * @generated SignedSource<<c77c4dd576917692fa80b533ccbcbf7f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoInput = {|
  fields?: ?CreateTodoFieldsInput,
  clientMutationId?: ?string,
|};
export type CreateTodoFieldsInput = {|
  ACL?: ?ACLInput,
  title?: ?string,
  done?: ?boolean,
|};
export type ACLInput = {|
  users?: ?$ReadOnlyArray<UserACLInput>,
  roles?: ?$ReadOnlyArray<RoleACLInput>,
  public?: ?PublicACLInput,
|};
export type UserACLInput = {|
  userId: string,
  read: boolean,
  write: boolean,
|};
export type RoleACLInput = {|
  roleName: string,
  read: boolean,
  write: boolean,
|};
export type PublicACLInput = {|
  read: boolean,
  write: boolean,
|};
export type CreateTodoMutation$variables = {|
  input: CreateTodoInput,
|};
export type CreateTodoMutation$data = {|
  +createTodo: ?{|
    +todo: {|
      +id: string,
      +title: ?string,
      +done: ?boolean,
    |},
  |},
|};
export type CreateTodoMutation = {|
  variables: CreateTodoMutation$variables,
  response: CreateTodoMutation$data,
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
    "concreteType": "CreateTodoPayload",
    "kind": "LinkedField",
    "name": "createTodo",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "done",
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
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "81021c9a05ac03b17c2ee4ecbb6dfbd3",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    todo {\n      id\n      title\n      done\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "fc0dead7096e7d4bc78d7d2027d1bb78";

module.exports = ((node/*: any*/)/*: Mutation<
  CreateTodoMutation$variables,
  CreateTodoMutation$data,
>*/);
