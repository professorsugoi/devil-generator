# devil-generator

It's important to keep the order of functions as they are. Changes will cause some fields to not generate. (This can be circumvented with a DOM, but sugoi is not big brain enough for that.)

The structure in script.js looks something like this:

    import {
        ONE,
        TWO,
        THREE,
    };

    function getRandomONE() {...

    function getRandomMTWO() {...

    function getRandomTHREE() {...

    document.querySelector(...
      setRandomONE();
      setRandomTWO;
      setRandomTHREE();

# wip

- Add the v2 compendium w/ TYPE, SUBTYPE, FAMILY, SPECIES
- Add simple image gen @ placeholder
