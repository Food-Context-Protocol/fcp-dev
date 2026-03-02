.PHONY: quality format format-check check build install-hooks uninstall-hooks

quality: format-check check build
	@echo "All quality checks passed."

format:
	npx prettier --write .

format-check:
	npx prettier --check .

check:
	npx astro check

build:
	npm run build

install-hooks:
	npx prek install

uninstall-hooks:
	npx prek uninstall
