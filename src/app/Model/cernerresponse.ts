export class CernerData {
  resourceType: string;
  id: string;
  type: string;
  total: number;
  link: Link[];
  entry: Entry[];
}

export class Entry {
  fullUrl: string;
  resource: Resource;
}

export class Resource {
  resourceType: string;
  id: string;
  meta: Meta;
  text: Text;
  extension: Extension[];
  identifier: Identifier[];
  active: boolean;
  name: Name[];
  telecom: Telecom[];
  gender: string;
  birthDate: string;
  maritalStatus: MaritalStatus;
  contact: Contact[];
  careProvider: CareProvider[];
}

export class Link {
  relation: string;
  url: string;
}

export class Meta {
  versionId: string;
  lastUpdated: Date;
}

export class Text {
  status: string;
  div: string;
}

export class ValueCoding {
  system: string;
  code: string;
  display: string;
  userSelected: boolean;
}

export class Extension2 {
  url: string;
  valueCoding: ValueCoding;
  valueString: string;
}

export class Extension {
  url: string;
  extension: Extension2[];
}

export class Coding {
  system: string;
  code: string;
  display: string;
  userSelected: boolean;
}

export class Type {
  coding: Coding[];
  text: string;
}

export class Extension3 {
  url: string;
  valueString: string;
}

export class Value {
  extension: Extension3[];
}

export class Period {
  start: Date;
  end?: Date;
}

export class Identifier {
  use: string;
  type: Type;
  system: string;
  value: string;
  _value: Value;
  period: Period;
}

export class Period2 {
  start: Date;
  end?: Date;
}

export class Name {
  use: string;
  text: string;
  family: string[];
  given: string[];
  period: Period2;
}

export class Period3 {
  start: Date;
}

export class Telecom {
  system: string;
  value: string;
  use: string;
  period: Period3;
}

export class Coding2 {
  system: string;
  code: string;
  display: string;
  userSelected: boolean;
}

export class MaritalStatus {
  coding: Coding2[];
  text: string;
}

export class Relationship {
  text: string;
}

export class Period4 {
  start: Date;
}

export class Name2 {
  use: string;
  text: string;
  family: string[];
  given: string[];
  period: Period4;
}

export class Period5 {
  start: Date;
}

export class Telecom2 {
  system: string;
  value: string;
  use: string;
  period: Period5;
}

export class Period6 {
  start: Date;
}

export class Address {
  use: string;
  text: string;
  line: string[];
  city: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  period: Period6;
}

export class Period7 {
  start: Date;
  end: Date;
}

export class Contact {
  relationship: Relationship[];
  name: Name2;
  telecom: Telecom2[];
  address: Address;
  gender: string;
  period: Period7;
}

export class CareProvider {
  reference: string;
  display: string;
}
