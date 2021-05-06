# did-context ChangeLog

## 3.1.0 -

### Changed
- Refactor to use current context repo template (generate the `.jsonld` during
  build).

## 3.0.1 - 2021-04-14

### Fixed
- Remove `"@container": "@set"` properties from `alsoKnownAs` and `service`
  terms, to match the DID Registries definition.

## 3.0.0 - 2021-03-30

### Changed
- **BREAKING**: Remove non-DID Core properties.
- **BREAKING**: Enable term protection.
- **BREAKING**: Change context url from `https://w3id.org/did/v0.11` to
  `https://www.w3.org/ns/did/v1`.

## 2.0.0 - 2019-07-02

### Added
- Add terms:
  - `EcdsaSecp256k1Signature2019`
  - `EcdsaSecp256k1VerificationKey2019`
  - `SchnorrSecp256k1Signature2019`
  - `SchnorrSecp256k1VerificationKey2019`
  - `keyAgreement`

### Changed
- New repository for packaging.  Previously mixed in with the [did-spec][]
  repository.
- **BREAKING**: Implement a new module structure.
- Build and distribute static browser version with all contexts.
- Export a `contexts` Map associating context URIs to contexts.
- Export a `constants` Object associating short ids to contexts URIs.

## 1.0.0 - 2019-01-03

See git history of [did-spec][] for changes previous to this release.

[did-spec]: https://github.com/w3c-ccg/did-spec
