class Base {
	constructor(redis) {
		this.redis = redis;
	}

	del(key){
		return this.redis.delete(key);
	}

	set(key, value){
		return this.redis.set(key, value);
	}
}

export default Base;
