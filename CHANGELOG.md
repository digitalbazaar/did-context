# did-context ChangeLog

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
