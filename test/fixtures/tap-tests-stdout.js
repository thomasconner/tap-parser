module.exports =
[ [ 'version', '13' ],
  [ 'comment', '# buffer_compare.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# same buffers\n' ],
  [ 'comment', '# not same buffers\n' ],
  [ 'assert', { ok: true, id: 1, name: 'should be equivalent' } ],
  [ 'comment', '# tests 2\n' ],
  [ 'comment', '# pass  2\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 2, name: 'should not be equivalent' } ],
  [ 'comment', '# common.js\n' ],
  [ 'assert',
    { ok: true, id: 3, name: 'test/buffer_compare.js' } ],
  [ 'assert',
    { ok: true, id: 4, name: 'just setup, nothing relevant' } ],
  [ 'comment', '# consumer.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# basic.tap\n' ],
  [ 'assert', { ok: true, id: 5, name: 'test/common.js' } ],
  [ 'comment', '# indent.tap\n' ],
  [ 'assert', { ok: true, id: 6, name: 'should be equivalent' } ],
  [ 'comment', '# missing.tap\n' ],
  [ 'assert', { ok: true, id: 7, name: 'should be equivalent' } ],
  [ 'comment', '# skip-all.tap\n' ],
  [ 'assert', { ok: true, id: 8, name: 'should be equivalent' } ],
  [ 'comment', '# tap-tests.tap\n' ],
  [ 'assert', { ok: true, id: 9, name: 'should be equivalent' } ],
  [ 'comment', '# yamlish.tap\n' ],
  [ 'assert', { ok: true, id: 10, name: 'should be equivalent' } ],
  [ 'comment', '# tests 6\n' ],
  [ 'comment', '# pass  6\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 11, name: 'should be equivalent' } ],
  [ 'comment', '# debug-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# debug test\n' ],
  [ 'assert', { ok: true, id: 12, name: 'test/consumer.js' } ],
  [ 'comment', '# tests 1\n' ],
  [ 'comment', '# pass  1\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 13, name: 'Should output debugger message' } ],
  [ 'comment', '# deep-strict.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment',
    '# strictDeepEquals shouldn\'t care about key order\n' ],
  [ 'assert', { ok: true, id: 14, name: 'test/debug-test.js' } ],
  [ 'comment',
    '# strictDeepEquals shouldn\'t care about key order recursively\n' ],
  [ 'assert',
    { ok: true, id: 15, name: 'should be strictly equal' } ],
  [ 'comment',
    '# strictDeepEquals shoudn\'t care about key order (but still might)\n' ],
  [ 'assert',
    { ok: true, id: 16, name: 'should be strictly equal' } ],
  [ 'comment', '# tests 3\n' ],
  [ 'comment', '# pass  3\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 17, name: 'should be strictly equal' } ],
  [ 'comment', '# deep.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment',
    '# deepEquals shouldn\'t care about key order and types\n' ],
  [ 'assert', { ok: true, id: 18, name: 'test/deep-strict.js' } ],
  [ 'comment',
    '# deepEquals shouldn\'t care about key order recursively and types\n' ],
  [ 'assert', { ok: true, id: 19, name: 'should be equivalent' } ],
  [ 'comment',
    '# deepEquals shoudn\'t care about key order (but still might) and types\n' ],
  [ 'assert', { ok: true, id: 20, name: 'should be equivalent' } ],
  [ 'comment', '# tests 3\n' ],
  [ 'comment', '# pass  3\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 21, name: 'should be equivalent' } ],
  [ 'comment', '# executed.sh\n' ],
  [ 'assert', { ok: true, id: 22, name: 'test/deep.js' } ],
  [ 'assert',
    { ok: true,
      id: 23,
      name: 'File with executable bit should be executed' } ],
  [ 'comment', '# exit-code.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# exit code 1 when tap results show failure\n' ],
  [ 'comment', '# test exits 0, has failures\n' ],
  [ 'assert', { ok: true, id: 24, name: 'test/executed.sh' } ],
  [ 'assert', { ok: true, id: 25, name: 'should be equal' } ],
  [ 'comment', '# test exits 1, has failures\n' ],
  [ 'assert', { ok: true, id: 26, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 27, name: 'should be equal' } ],
  [ 'comment', '# test exits 1, has no failures\n' ],
  [ 'assert', { ok: true, id: 28, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 29, name: 'should be equal' } ],
  [ 'comment', '# successes exit 0\n' ],
  [ 'comment', '# test that does nothing, but exits 0\n' ],
  [ 'assert', { ok: true, id: 30, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 31, name: 'should be equal' } ],
  [ 'comment', '# test that succeeds, and exits 0\n' ],
  [ 'assert', { ok: true, id: 32, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 33, name: 'should be equal' } ],
  [ 'comment', '# tests 10\n' ],
  [ 'comment', '# pass  10\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 34, name: 'should be equal' } ],
  [ 'comment', '# expose-gc-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# gc test when the gc isn\'t there\n' ],
  [ 'assert', { ok: true, id: 35, name: 'test/exit-code.js' } ],
  [ 'comment', '# gc test when the gc should be there\n' ],
  [ 'comment', '# test for gc using --gc\n' ],
  [ 'assert', { ok: true, id: 36, name: 'should be equal' } ],
  [ 'comment', '# test for gc using --expose-gc\n' ],
  [ 'assert', { ok: true, id: 37, name: 'should be equal' } ],
  [ 'comment', '# cleanup\n' ],
  [ 'comment', '# tests 3\n' ],
  [ 'comment', '# pass  3\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 38, name: 'should be equal' } ],
  [ 'comment', '# global-harness-async.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# outer\n' ],
  [ 'comment', '# inner 1\n' ],
  [ 'assert',
    { ok: true, id: 39, name: 'test/expose-gc-test.js' } ],
  [ 'comment', '# inner 2\n' ],
  [ 'assert', { ok: true, id: 40, name: '1-1' } ],
  [ 'comment', '# inner 3\n' ],
  [ 'assert', { ok: true, id: 41, name: '2-1' } ],
  [ 'assert', { ok: true, id: 42, name: '3-1' } ],
  [ 'comment', '# independent-timeouts.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# finishes in time\n' ],
  [ 'comment', '# finishes in time too\n' ],
  [ 'comment', '# tests 0\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 43, name: 'test/global-harness-async.js' } ],
  [ 'comment', '# isolated-conf-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# one\n' ],
  [ 'assert',
    { ok: true, id: 44, name: 'test/independent-timeouts.js' } ],
  [ 'assert', { ok: true, id: 45, name: 'should be equal' } ],
  [ 'comment', '# two\n' ],
  [ 'assert', { ok: true, id: 46, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 47, name: 'should be equal' } ],
  [ 'comment', '# tests 4\n' ],
  [ 'comment', '# pass  4\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 48, name: 'should be equal' } ],
  [ 'comment', '# meta-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# meta test\n' ],
  [ 'assert',
    { ok: true, id: 49, name: 'test/isolated-conf-test.js' } ],
  [ 'assert', { ok: true, id: 50, name: 'sanity check' } ],
  [ 'assert', { ok: true, id: 51, name: 'not ok' } ],
  [ 'assert', { ok: true, id: 52, name: 'total test count' } ],
  [ 'assert', { ok: true, id: 53, name: 'tests passed' } ],
  [ 'assert', { ok: true, id: 54, name: 'tests failed' } ],
  [ 'assert', { ok: true, id: 55, name: 'ok is boolean' } ],
  [ 'assert', { ok: true, id: 56, name: 'skip is number' } ],
  [ 'assert', { ok: true, id: 57, name: 'results isa Results' } ],
  [ 'assert', { ok: true, id: 58, name: 'test isa Test' } ],
  [ 'comment', '# tests 10\n' ],
  [ 'comment', '# pass  10\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 59, name: 'test isa Harness' } ],
  [ 'comment', '# nested-async.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# Harness async test support\n' ],
  [ 'assert', { ok: true, id: 60, name: 'test/meta-test.js' } ],
  [ 'comment', '# sync child B\n' ],
  [ 'comment', '# async grandchild A\n' ],
  [ 'assert', { ok: true, id: 61, name: 'sync child A' } ],
  [ 'comment', '# async grandchild B\n' ],
  [ 'assert', { ok: true, id: 62, name: '(unnamed assert)' } ],
  [ 'comment', '# async child\n' ],
  [ 'assert', { ok: true, id: 63, name: '(unnamed assert)' } ],
  [ 'comment', '# sync grandchild in async child B\n' ],
  [ 'assert',
    { ok: true, id: 64, name: 'sync grandchild in async child A' } ],
  [ 'comment', '# tests 5\n' ],
  [ 'comment', '# pass  5\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 65, name: '(unnamed assert)' } ],
  [ 'comment', '# nested-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# parent\n' ],
  [ 'assert', { ok: true, id: 66, name: 'test/nested-async.js' } ],
  [ 'comment', '# subtest\n' ],
  [ 'assert', { ok: true, id: 67, name: 'p test' } ],
  [ 'comment', '# nested subtest\n' ],
  [ 'assert', { ok: true, id: 68, name: 'ch test' } ],
  [ 'comment', '# another subtest\n' ],
  [ 'assert', { ok: true, id: 69, name: 'grch test' } ],
  [ 'comment', '# tests 4\n' ],
  [ 'comment', '# pass  4\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 70, name: 'ch test 2' } ],
  [ 'comment', '# non-tap-output.js\n' ],
  [ 'comment', '# everything is fine\n' ],
  [ 'comment', '# there are no errors\n' ],
  [ 'comment', '# this output is not haiku.\n' ],
  [ 'comment', '# is 8 ok?\n' ],
  [ 'assert', { ok: true, id: 71, name: 'test/nested-test.js' } ],
  [ 'comment', '# but: nevertheless, here we are\n' ],
  [ 'comment', '# this: is indented\n' ],
  [ 'comment', '# and: it\n' ],
  [ 'comment', '# might: ~\n' ],
  [ 'comment', '# be: yaml?\n' ],
  [ 'assert', { ok: true, id: 72, name: ', 8 can stay.' } ],
  [ 'assert', { ok: true, id: 73, name: 'might be confusing' } ],
  [ 'assert', { ok: true, id: 74, name: 'done now, exiting' } ],
  [ 'comment', '# not-executed.sh\n' ],
  [ 'comment', '# output-childtest-description.js\n' ],
  [ 'comment',
    '# /Users/isaacs/dev/js/tap/test/nested-tests-fixture.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# nested tests, parent and child pass\n' ],
  [ 'assert',
    { ok: true, id: 75, name: 'test/non-tap-output.js' } ],
  [ 'assert',
    { ok: true, id: 76, name: 'outputs parent description' } ],
  [ 'assert',
    { ok: true, id: 77, name: 'outputs child description' } ],
  [ 'assert',
    { ok: true,
      id: 78,
      name: 'outputs parent description before parent result' } ],
  [ 'assert',
    { ok: true,
      id: 79,
      name: 'outputs parent result before child description' } ],
  [ 'comment', '# tests 5\n' ],
  [ 'comment', '# pass  5\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true,
      id: 80,
      name: 'outputs child description before child result' } ],
  [ 'comment', '# result-trap.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# trap result\n' ],
  [ 'assert',
    { ok: true,
      id: 81,
      name: 'test/output-childtest-description.js' } ],
  [ 'assert', { ok: true, id: 82, name: 'should be equal' } ],
  [ 'comment', '# tests 2\n' ],
  [ 'comment', '# pass  2\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 83, name: 'should be equal' } ],
  [ 'comment', '# segv.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# setup\n' ],
  [ 'assert', { ok: true, id: 84, name: 'test/result-trap.js' } ],
  [ 'comment', '# segv\n' ],
  [ 'assert', { ok: true, id: 85, name: 'compiled seg faulter' } ],
  [ 'assert', { ok: true, id: 86, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 87, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 88, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 89, name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 90, name: 'should be equivalent' } ],
  [ 'comment', '# cleanup\n' ],
  [ 'assert', { ok: true, id: 91, name: 'should be equal' } ],
  [ 'comment', '# tests 8\n' ],
  [ 'comment', '# pass  8\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 92, name: 'cleaned up' } ],
  [ 'comment', '# simple-harness-test-with-plan.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# trivial success\n' ],
  [ 'assert', { ok: true, id: 93, name: 'test/segv.js' } ],
  [ 'comment', '# two tests\n' ],
  [ 'assert', { ok: true, id: 94, name: 'it works' } ],
  [ 'assert', { ok: true, id: 95, name: 'math should work' } ],
  [ 'comment', '# tests 3\n' ],
  [ 'comment', '# pass  3\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 96, name: 'false should not be ok' } ],
  [ 'comment', '# simple-harness-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# trivial success\n' ],
  [ 'assert',
    { ok: true,
      id: 97,
      name: 'test/simple-harness-test-with-plan.js' } ],
  [ 'comment', '# two tests\n' ],
  [ 'assert', { ok: true, id: 98, name: 'it works' } ],
  [ 'assert', { ok: true, id: 99, name: 'math should work' } ],
  [ 'comment', '# tests 3\n' ],
  [ 'comment', '# pass  3\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 100, name: 'false should not be ok' } ],
  [ 'comment', '# test-assert-todo-skip.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# not much\n' ],
  [ 'assert',
    { ok: true, id: 101, name: 'test/simple-harness-test.js' } ],
  [ 'assert',
    { ok: true, id: 102, skip: 'skip it good', name: 'always passes' } ],
  [ 'assert',
    { ok: true, id: 103, skip: 'always fails', name: 'false' } ],
  [ 'assert',
    { ok: true,
      id: 104,
      todo: 'remove todo directive',
      name: 'bonus' } ],
  [ 'assert',
    { ok: true, id: 105, todo: 'implement a thing', name: 'expected' } ],
  [ 'assert',
    { ok: true,
      id: 106,
      skip: true,
      name: 'always passes without explanation' } ],
  [ 'assert',
    { ok: true,
      id: 107,
      skip: true,
      name: 'false without explanation' } ],
  [ 'assert',
    { ok: true,
      id: 108,
      todo: true,
      name: 'bonus without explanation' } ],
  [ 'comment', '# tests 8\n' ],
  [ 'comment', '# skip  4\n' ],
  [ 'comment', '# todo  4\n' ],
  [ 'assert',
    { ok: true,
      id: 109,
      todo: true,
      name: 'expected without explanation' } ],
  [ 'comment', '# test-descriptions.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# captures test descriptions\n' ],
  [ 'assert',
    { ok: true, id: 110, name: 'test/test-assert-todo-skip.js' } ],
  [ 'assert', { ok: true, id: 111, name: 'exit cleanly' } ],
  [ 'assert',
    { ok: true, id: 112, name: 'captures SKIP description' } ],
  [ 'assert',
    { ok: true, id: 113, name: 'skip summary is not from file' } ],
  [ 'assert',
    { ok: true, id: 114, name: 'todo summary is not from file' } ],
  [ 'assert',
    { ok: false,
      id: 115,
      name: 'captures TODO description',
      diag: 
       { file: 'child_process.js',
         line: 707,
         column: 7,
         stack: 
          [ 'getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\n',
            'Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\n',
            'Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\n',
            '/Users/isaacs/dev/js/tap/test/test-descriptions.js:32:7\n',
            'ChildProcess.exithandler (child_process.js:707:7)\n',
            'emitTwo (events.js:87:13)\n',
            'ChildProcess.emit (events.js:169:7)\n',
            'maybeClose (child_process.js:984:16)\n',
            'Socket.<anonymous> (child_process.js:1153:11)\n',
            'emitOne (events.js:77:13)\n' ] } } ],
  [ 'assert', { ok: true, id: 116, name: 'exit cleanly' } ],
  [ 'assert',
    { ok: true, id: 117, name: 'captures SKIP description' } ],
  [ 'assert',
    { ok: true, id: 118, name: 'skip summary is not in TAP output' } ],
  [ 'assert',
    { ok: true, id: 119, name: 'todo summary is not in TAP output' } ],
  [ 'assert',
    { ok: false,
      id: 120,
      name: 'captures TODO description',
      diag: 
       { file: 'child_process.js',
         line: 707,
         column: 7,
         stack: 
          [ 'getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\n',
            'Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\n',
            'Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\n',
            '/Users/isaacs/dev/js/tap/test/test-descriptions.js:18:7\n',
            'ChildProcess.exithandler (child_process.js:707:7)\n',
            'emitTwo (events.js:87:13)\n',
            'ChildProcess.emit (events.js:169:7)\n',
            'maybeClose (child_process.js:984:16)\n',
            'Process.ChildProcess._handle.onexit (child_process.js:1057:5)\n' ] } } ],
  [ 'assert', { ok: true, id: 121, name: 'exit cleanly' } ],
  [ 'assert',
    { ok: false,
      id: 122,
      name: 'summarizes skipped count',
      diag: 
       { file: 'child_process.js',
         line: 707,
         column: 7,
         stack: 
          [ 'getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\n',
            'Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\n',
            'Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\n',
            '/Users/isaacs/dev/js/tap/test/test-descriptions.js:23:7\n',
            'ChildProcess.exithandler (child_process.js:707:7)\n',
            'emitTwo (events.js:87:13)\n',
            'ChildProcess.emit (events.js:169:7)\n',
            'maybeClose (child_process.js:984:16)\n',
            'Process.ChildProcess._handle.onexit (child_process.js:1057:5)\n' ] } } ],
  [ 'assert',
    { ok: false,
      id: 123,
      name: 'summarizes todo count',
      diag: 
       { file: 'child_process.js',
         line: 707,
         column: 7,
         stack: 
          [ 'getCaller (/Users/isaacs/dev/js/tap/lib/tap-assert.js:439:17)\n',
            'Function.assert (/Users/isaacs/dev/js/tap/lib/tap-assert.js:21:16)\n',
            'Test._testAssert (/Users/isaacs/dev/js/tap/lib/tap-test.js:87:16)\n',
            '/Users/isaacs/dev/js/tap/test/test-descriptions.js:24:7\n',
            'ChildProcess.exithandler (child_process.js:707:7)\n',
            'emitTwo (events.js:87:13)\n',
            'ChildProcess.emit (events.js:169:7)\n',
            'maybeClose (child_process.js:984:16)\n',
            'Process.ChildProcess._handle.onexit (child_process.js:1057:5)\n' ] } } ],
  [ 'comment', '# tests 13\n' ],
  [ 'comment', '# pass  9\n' ],
  [ 'comment', '# fail  4\n' ],
  [ 'assert',
    { ok: false,
      id: 124,
      name: 'test/test-descriptions.js',
      diag: { exit: 1, command: '/usr/local/bin/iojs test-descriptions.js' } } ],
  [ 'comment', '# test-directives.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# captures test descriptions\n' ],
  [ 'comment', '# raw TAP > TAP consumer > TAP producer\n' ],
  [ 'assert',
    { ok: true, id: 125, name: 'overall result is PASS' } ],
  [ 'assert', { ok: true, id: 126, name: 'captures ok SKIP' } ],
  [ 'assert',
    { ok: true, id: 127, name: 'captures not ok SKIP' } ],
  [ 'assert',
    { ok: true, id: 128, name: 'skip summary not in TAP output' } ],
  [ 'assert', { ok: true, id: 129, name: 'captures ok TODO' } ],
  [ 'assert',
    { ok: true, id: 130, name: 'captures not ok TODO' } ],
  [ 'assert',
    { ok: true, id: 131, name: 'todo summary is not in TAP output' } ],
  [ 'comment', '# raw TAP > TAP consumer > summary\n' ],
  [ 'assert',
    { ok: true, id: 132, name: 'no ugly "undefined" in output' } ],
  [ 'assert',
    { ok: true, id: 133, name: 'overall result is PASS' } ],
  [ 'assert', { ok: true, id: 134, name: 'no SKIP in summary' } ],
  [ 'assert',
    { ok: true, id: 135, name: 'skip summary is not in TAP output' } ],
  [ 'assert', { ok: true, id: 136, name: 'no TODO in summary' } ],
  [ 'assert',
    { ok: true, id: 137, name: 'todo summary is not in TAP output' } ],
  [ 'comment', '# TAP producer via require("tap")\n' ],
  [ 'assert',
    { ok: true, id: 138, name: 'no ugly "undefined" in output' } ],
  [ 'assert',
    { ok: true, id: 139, name: 'overall result is PASS' } ],
  [ 'assert', { ok: true, id: 140, name: 'captures ok SKIP' } ],
  [ 'assert',
    { ok: true, id: 141, name: 'captures not ok SKIP' } ],
  [ 'assert',
    { ok: true, id: 142, name: 'skip summary not in TAP output' } ],
  [ 'assert', { ok: true, id: 143, name: 'captures ok TODO' } ],
  [ 'assert',
    { ok: true, id: 144, name: 'captures not ok TODO' } ],
  [ 'assert',
    { ok: true, id: 145, name: 'todo summary is not in TAP output' } ],
  [ 'comment', '# tests 22\n' ],
  [ 'comment', '# pass  22\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 146, name: 'no ugly "undefined" in output' } ],
  [ 'comment', '# test-skip.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'assert',
    { ok: true, id: 147, name: 'test/test-directives.js' } ],
  [ 'comment', '# tests 1\n' ],
  [ 'comment', '# skip  1\n' ],
  [ 'assert',
    { ok: true,
      id: 148,
      skip: true,
      name: 'does not count as failure' } ],
  [ 'comment', '# test-test.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# testing the test object\n' ],
  [ 'assert', { ok: true, id: 149, name: 'test/test-skip.js' } ],
  [ 'assert',
    { ok: true,
      id: 150,
      name: 'test object should be instanceof Test' } ],
  [ 'assert',
    { ok: true,
      id: 151,
      name: 'test object should be instanceof Harness' } ],
  [ 'assert',
    { ok: true,
      id: 152,
      name: 'test._Test should be the Test class' } ],
  [ 'assert',
    { ok: true, id: 153, name: 'should have isNotDeepEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 154,
      name: 'isNotDeepEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 155, name: 'should have equals method' } ],
  [ 'assert',
    { ok: true, id: 156, name: 'equals method should be a function' } ],
  [ 'assert',
    { ok: true, id: 157, name: 'should have inequivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 158,
      name: 'inequivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 159, name: 'should have threw method' } ],
  [ 'assert',
    { ok: true, id: 160, name: 'threw method should be a function' } ],
  [ 'assert',
    { ok: true, id: 161, name: 'should have strictEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 162,
      name: 'strictEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 163, name: 'should have emit method' } ],
  [ 'assert',
    { ok: true, id: 164, name: 'emit method should be a function' } ],
  [ 'assert',
    { ok: true, id: 165, name: 'should have fail method' } ],
  [ 'assert',
    { ok: true, id: 166, name: 'fail method should be a function' } ],
  [ 'assert',
    { ok: true, id: 167, name: 'should have strictEquals method' } ],
  [ 'assert',
    { ok: true,
      id: 168,
      name: 'strictEquals method should be a function' } ],
  [ 'assert',
    { ok: true, id: 169, name: 'should have notLike method' } ],
  [ 'assert',
    { ok: true,
      id: 170,
      name: 'notLike method should be a function' } ],
  [ 'assert',
    { ok: true, id: 171, name: 'should have dissimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 172,
      name: 'dissimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 173, name: 'should have true method' } ],
  [ 'assert',
    { ok: true, id: 174, name: 'true method should be a function' } ],
  [ 'assert',
    { ok: true, id: 175, name: 'should have assert method' } ],
  [ 'assert',
    { ok: true, id: 176, name: 'assert method should be a function' } ],
  [ 'assert',
    { ok: true, id: 177, name: 'should have is method' } ],
  [ 'assert',
    { ok: true, id: 178, name: 'is method should be a function' } ],
  [ 'assert',
    { ok: true, id: 179, name: 'should have ok method' } ],
  [ 'assert',
    { ok: true, id: 180, name: 'ok method should be a function' } ],
  [ 'assert',
    { ok: true, id: 181, name: 'should have isEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 182,
      name: 'isEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 183, name: 'should have isDeeply method' } ],
  [ 'assert',
    { ok: true,
      id: 184,
      name: 'isDeeply method should be a function' } ],
  [ 'assert',
    { ok: true, id: 185, name: 'should have deepEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 186,
      name: 'deepEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 187, name: 'should have deepEquals method' } ],
  [ 'assert',
    { ok: true,
      id: 188,
      name: 'deepEquals method should be a function' } ],
  [ 'assert',
    { ok: true, id: 189, name: 'should have pass method' } ],
  [ 'assert',
    { ok: true, id: 190, name: 'pass method should be a function' } ],
  [ 'assert',
    { ok: true, id: 191, name: 'should have length method' } ],
  [ 'assert',
    { ok: true, id: 192, name: 'length method should be a function' } ],
  [ 'assert',
    { ok: true, id: 193, name: 'should have skip method' } ],
  [ 'assert',
    { ok: true, id: 194, name: 'skip method should be a function' } ],
  [ 'assert',
    { ok: true, id: 195, name: 'should have isNotEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 196,
      name: 'isNotEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 197, name: 'should have looseEquals method' } ],
  [ 'assert',
    { ok: true,
      id: 198,
      name: 'looseEquals method should be a function' } ],
  [ 'assert',
    { ok: true, id: 199, name: 'should have false method' } ],
  [ 'assert',
    { ok: true, id: 200, name: 'false method should be a function' } ],
  [ 'assert',
    { ok: true, id: 201, name: 'should have notDeeply method' } ],
  [ 'assert',
    { ok: true,
      id: 202,
      name: 'notDeeply method should be a function' } ],
  [ 'assert',
    { ok: true, id: 203, name: 'should have ifErr method' } ],
  [ 'assert',
    { ok: true, id: 204, name: 'ifErr method should be a function' } ],
  [ 'assert',
    { ok: true, id: 205, name: 'should have hasFields method' } ],
  [ 'assert',
    { ok: true,
      id: 206,
      name: 'hasFields method should be a function' } ],
  [ 'assert',
    { ok: true, id: 207, name: 'should have isNotDeeply method' } ],
  [ 'assert',
    { ok: true,
      id: 208,
      name: 'isNotDeeply method should be a function' } ],
  [ 'assert',
    { ok: true, id: 209, name: 'should have like method' } ],
  [ 'assert',
    { ok: true, id: 210, name: 'like method should be a function' } ],
  [ 'assert',
    { ok: true, id: 211, name: 'should have similar method' } ],
  [ 'assert',
    { ok: true,
      id: 212,
      name: 'similar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 213, name: 'should have notOk method' } ],
  [ 'assert',
    { ok: true, id: 214, name: 'notOk method should be a function' } ],
  [ 'assert',
    { ok: true, id: 215, name: 'should have isDissimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 216,
      name: 'isDissimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 217, name: 'should have isEquivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 218,
      name: 'isEquivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 219, name: 'should have doesNotEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 220,
      name: 'doesNotEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 221, name: 'should have isSimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 222,
      name: 'isSimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 223, name: 'should have notDeepEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 224,
      name: 'notDeepEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 225, name: 'should have type method' } ],
  [ 'assert',
    { ok: true, id: 226, name: 'type method should be a function' } ],
  [ 'assert',
    { ok: true, id: 227, name: 'should have notok method' } ],
  [ 'assert',
    { ok: true, id: 228, name: 'notok method should be a function' } ],
  [ 'assert',
    { ok: true, id: 229, name: 'should have isInequivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 230,
      name: 'isInequivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 231, name: 'should have isNot method' } ],
  [ 'assert',
    { ok: true, id: 232, name: 'isNot method should be a function' } ],
  [ 'assert',
    { ok: true, id: 233, name: 'should have same method' } ],
  [ 'assert',
    { ok: true, id: 234, name: 'same method should be a function' } ],
  [ 'assert',
    { ok: true, id: 235, name: 'should have isInequal method' } ],
  [ 'assert',
    { ok: true,
      id: 236,
      name: 'isInequal method should be a function' } ],
  [ 'assert',
    { ok: true, id: 237, name: 'should have _endNice method' } ],
  [ 'assert',
    { ok: true,
      id: 238,
      name: '_endNice method should be a function' } ],
  [ 'assert',
    { ok: true, id: 239, name: 'should have ifError method' } ],
  [ 'assert',
    { ok: true,
      id: 240,
      name: 'ifError method should be a function' } ],
  [ 'assert',
    { ok: true, id: 241, name: 'should have iferror method' } ],
  [ 'assert',
    { ok: true,
      id: 242,
      name: 'iferror method should be a function' } ],
  [ 'assert',
    { ok: true, id: 243, name: 'should have clear method' } ],
  [ 'assert',
    { ok: true, id: 244, name: 'clear method should be a function' } ],
  [ 'assert',
    { ok: true, id: 245, name: 'should have has method' } ],
  [ 'assert',
    { ok: true, id: 246, name: 'has method should be a function' } ],
  [ 'assert',
    { ok: true, id: 247, name: 'should have not method' } ],
  [ 'assert',
    { ok: true, id: 248, name: 'not method should be a function' } ],
  [ 'assert',
    { ok: true, id: 249, name: 'should have timeout method' } ],
  [ 'assert',
    { ok: true,
      id: 250,
      name: 'timeout method should be a function' } ],
  [ 'assert',
    { ok: true, id: 251, name: 'should have notSimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 252,
      name: 'notSimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 253, name: 'should have isUnlike method' } ],
  [ 'assert',
    { ok: true,
      id: 254,
      name: 'isUnlike method should be a function' } ],
  [ 'assert',
    { ok: true, id: 255, name: 'should have notEquals method' } ],
  [ 'assert',
    { ok: true,
      id: 256,
      name: 'notEquals method should be a function' } ],
  [ 'assert',
    { ok: true, id: 257, name: 'should have unsimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 258,
      name: 'unsimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 259, name: 'should have result method' } ],
  [ 'assert',
    { ok: true, id: 260, name: 'result method should be a function' } ],
  [ 'assert',
    { ok: true, id: 261, name: 'should have doesNotThrow method' } ],
  [ 'assert',
    { ok: true,
      id: 262,
      name: 'doesNotThrow method should be a function' } ],
  [ 'assert',
    { ok: true, id: 263, name: 'should have error method' } ],
  [ 'assert',
    { ok: true, id: 264, name: 'error method should be a function' } ],
  [ 'assert',
    { ok: true, id: 265, name: 'should have constructor method' } ],
  [ 'assert',
    { ok: true,
      id: 266,
      name: 'constructor method should be a function' } ],
  [ 'assert',
    { ok: true, id: 267, name: 'should have notEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 268,
      name: 'notEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 269, name: 'should have throws method' } ],
  [ 'assert',
    { ok: true, id: 270, name: 'throws method should be a function' } ],
  [ 'assert',
    { ok: true, id: 271, name: 'should have isLike method' } ],
  [ 'assert',
    { ok: true, id: 272, name: 'isLike method should be a function' } ],
  [ 'assert',
    { ok: true, id: 273, name: 'should have isNotSimilar method' } ],
  [ 'assert',
    { ok: true,
      id: 274,
      name: 'isNotSimilar method should be a function' } ],
  [ 'assert',
    { ok: true, id: 275, name: 'should have isNotEquivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 276,
      name: 'isNotEquivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 277, name: 'should have inequal method' } ],
  [ 'assert',
    { ok: true,
      id: 278,
      name: 'inequal method should be a function' } ],
  [ 'assert',
    { ok: true, id: 279, name: 'should have notEquivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 280,
      name: 'notEquivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 281, name: 'should have isNotLike method' } ],
  [ 'assert',
    { ok: true,
      id: 282,
      name: 'isNotLike method should be a function' } ],
  [ 'assert',
    { ok: true, id: 283, name: 'should have equivalent method' } ],
  [ 'assert',
    { ok: true,
      id: 284,
      name: 'equivalent method should be a function' } ],
  [ 'assert',
    { ok: true, id: 285, name: 'should have looseEqual method' } ],
  [ 'assert',
    { ok: true,
      id: 286,
      name: 'looseEqual method should be a function' } ],
  [ 'assert',
    { ok: true, id: 287, name: 'should have equal method' } ],
  [ 'assert',
    { ok: true, id: 288, name: 'equal method should be a function' } ],
  [ 'assert',
    { ok: true, id: 289, name: 'should have unlike method' } ],
  [ 'assert',
    { ok: true, id: 290, name: 'unlike method should be a function' } ],
  [ 'assert',
    { ok: true, id: 291, name: 'should have doesNotHave method' } ],
  [ 'assert',
    { ok: true,
      id: 292,
      name: 'doesNotHave method should be a function' } ],
  [ 'assert',
    { ok: true, id: 293, name: 'should have comment method' } ],
  [ 'assert',
    { ok: true,
      id: 294,
      name: 'comment method should be a function' } ],
  [ 'assert',
    { ok: true, id: 295, name: 'should have isa method' } ],
  [ 'comment', '# tests 147\n' ],
  [ 'comment', '# pass  147\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 296, name: 'isa method should be a function' } ],
  [ 'comment', '# timeout.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# timeout test with plan only\n' ],
  [ 'assert', { ok: true, id: 297, name: 'test/test-test.js' } ],
  [ 'assert', { ok: true, id: 298, name: 'a' } ],
  [ 'comment', '# timeout test with plan and end\n' ],
  [ 'assert', { ok: true, id: 299, name: 'b' } ],
  [ 'assert', { ok: true, id: 300, name: 'a' } ],
  [ 'comment', '# tests 4\n' ],
  [ 'comment', '# pass  4\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 301, name: 'b' } ],
  [ 'comment', '# trivial-success.js\n' ],
  [ 'assert', { ok: true, id: 302, name: 'test/timeout.js' } ],
  [ 'comment', '# undefined_indented.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# consume yaml\n' ],
  [ 'assert',
    { ok: true, id: 303, name: 'test/trivial-success.js' } ],
  [ 'comment', '# tests 1\n' ],
  [ 'comment', '# pass  1\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert',
    { ok: true, id: 304, name: 'should be equivalent' } ],
  [ 'comment', '# valid-command.js\n' ],
  [ 'comment', '# TAP version 13\n' ],
  [ 'comment', '# valid command\n' ],
  [ 'assert',
    { ok: true, id: 305, name: 'test/undefined_indented.js' } ],
  [ 'assert',
    { ok: true, id: 306, name: 'should be equivalent' } ],
  [ 'assert',
    { ok: true, id: 307, name: 'should be equivalent' } ],
  [ 'assert',
    { ok: true, id: 308, name: 'should be equivalent' } ],
  [ 'assert',
    { ok: true, id: 309, name: 'should be equivalent' } ],
  [ 'assert',
    { ok: true, id: 310, name: 'should be equivalent' } ],
  [ 'comment', '# tests 6\n' ],
  [ 'comment', '# pass  6\n' ],
  [ 'comment', '# ok\n' ],
  [ 'assert', { ok: true, id: 311, name: 'should be equal' } ],
  [ 'assert',
    { ok: true, id: 312, name: 'test/valid-command.js' } ],
  [ 'plan', { start: 1, end: 312 } ],
  [ 'comment', '# tests 312\n' ],
  [ 'comment', '# pass  298\n' ],
  [ 'comment', '# fail  5\n' ],
  [ 'comment', '# skip  5\n' ],
  [ 'comment', '# todo  4\n' ],
  [ 'complete',
    { ok: false,
      count: 312,
      pass: 307,
      fail: 5,
      todo: 4,
      skip: 5,
      plan: { start: 1, end: 312 } } ] ]