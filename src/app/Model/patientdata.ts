export interface PatientDetails {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  link: Link[];
  entry: Entry[];
}

export interface Meta {
  lastUpdated: Date;
}

export interface Link {
  relation: string;
  url: string;
}

export interface Tag {
  system: string;
  code: string;
}

export interface Meta2 {
  versionId: string;
  lastUpdated: Date;
  profile: string[];
  tag: Tag[];
}

export interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface Type {
  coding: Coding[];
  text: string;
}

export interface Identifier {
  system: string;
  value: string;
  type: Type;
  use: string;
}

export interface Name {
  use: string;
  family: string;
  given: string[];
  prefix: string[];
  suffix: string[];
}

export interface Telecom {
  system: string;
  value: string;
  use: string;
  rank?: number;
}

export interface Extension2 {
  url: string;
  valueDecimal: number;
}

export interface Extension {
  url: string;
  extension: Extension2[];
}

export interface Address {
  line: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
  use: string;
  extension: Extension[];
}

export interface Coding2 {
  system: string;
  code: string;
}

export interface MaritalStatus {
  coding: Coding2[];
  text: string;
}

export interface Text {
  status: string;
  div: string;
}

export interface Coding3 {
  system: string;
  code: string;
  display: string;
}

export interface ValueCodeableConcept {
  coding: Coding3[];
  text: string;
}

export interface ValueAddress {
  city: string;
  state: string;
  country: string;
}

export interface ValueHumanName {
  text: string;
}

export interface Extension3 {
  url: string;
  valueCodeableConcept: ValueCodeableConcept;
  valueAddress: ValueAddress;
  valueString: string;
  valueCode: string;
  valueBoolean?: boolean;
  valueHumanName: ValueHumanName;
}

export interface Coding4 {
  system: string;
  code: string;
  display: string;
}

export interface Language {
  coding: Coding4[];
}

export interface Communication {
  language: Language;
}

export interface GeneralPractitioner {
  reference: string;
}

export interface Resource {
  resourceType: string;
  id: string;
  meta: Meta2;
  identifier: Identifier[];
  name: Name[];
  telecom: Telecom[];
  gender: string;
  birthDate: string;
  address: Address[];
  maritalStatus: MaritalStatus;
  text: Text;
  extension: Extension3[];
  deceasedDateTime?: Date;
  multipleBirthBoolean?: boolean;
  communication: Communication[];
  active?: boolean;
  generalPractitioner: GeneralPractitioner[];
}

export interface Search {
  mode: string;
}

export interface Entry {
  fullUrl: string;
  resource: Resource;
  search: Search;
}
