/**
 * @generated SignedSource<<705a85d1e5aa5c7df620d08ba116b9c5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type PersonCard_person$fragmentType = any;
export type PersonRendererQuery$variables = {||};
export type PersonRendererQuery$data = {|
  +people: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentSpreads: PersonCard_person$fragmentType,
      |},
    |}>,
  |},
|};
export type PersonRendererQuery = {|
  variables: PersonRendererQuery$variables,
  response: PersonRendererQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PersonRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PersonConnection",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PersonCard_person"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PersonRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PersonConnection",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PersonEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "node",
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
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "salary",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1471b484e2a6452ac49bc0e9eabf0c9f",
    "id": null,
    "metadata": {},
    "name": "PersonRendererQuery",
    "operationKind": "query",
    "text": "query PersonRendererQuery {\n  people {\n    edges {\n      node {\n        ...PersonCard_person\n        id\n      }\n    }\n  }\n}\n\nfragment PersonCard_person on Person {\n  id\n  name\n  salary\n}\n"
  }
};

(node/*: any*/).hash = "be01f5cc4b1d03dc843ae8e581a22db9";

module.exports = ((node/*: any*/)/*: Query<
  PersonRendererQuery$variables,
  PersonRendererQuery$data,
>*/);
