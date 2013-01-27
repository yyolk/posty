
build: components
	component build

components:
	component install

clean:
	rm -fr build

distclean: clean
	rm -fr components

.PHONY: clean distclean
