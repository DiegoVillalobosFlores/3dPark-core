class Base {
	constructor(redis) {
		this.redis = redis;
	}

	del(keys){
		return this.redis.del(keys);
	}

	set(key, value){
		return this.redis.set(key, value);
	}

	get(key){
		return this.redis.get(key);
	}
}

export default Base;
