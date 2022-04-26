/**
 * @generated SignedSource<<4877dbe8bf9a515ef4891b07fc405637>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type PersonCard_person$fragmentType: FragmentType;
export type PersonCard_person$data = {|
  +id: string,
  +name: ?string,
  +salary: ?number,
  +$fragmentType: PersonCard_person$fragmentType,
|};
export type PersonCard_person$key = {
  +$data?: PersonCard_person$data,
  +$fragmentSpreads: PersonCard_person$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonCard_person",
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
  "type": "Person",
  "abstractKey": null
};

(node/*: any*/).hash = "4042f9666b519366d0d9cfa120cca09a";

module.exports = ((node/*: any*/)/*: Fragment<
  PersonCard_person$fragmentType,
  PersonCard_person$data,
>*/);
