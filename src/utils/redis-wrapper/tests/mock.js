import test from 'ava';

import RedisMock from '../mock';

test.before(t => {
	t.context.base = new RedisMock.Base();
});

test.serial('base', async t => {
	const { base } = t.context;

	const setResult = await base.set('key', 'value');

	t.is(setResult, 'OK');

	const getResult = await base.get('key');

	t.is(getResult, 'value');

	const delResult = await base.del(['key']);

	t.is(delResult, 1);

	const nullGet = await base.get('key');

	t.is(nullGet, null);
});
