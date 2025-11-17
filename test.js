const { add } = require("./index");

if (add(2, 3) === 5) {
  console.log("TEST PASSED");
  process.exit(0);
} else {
  console.error("TEST FAILED");
  process.exit(1);
}

