---
slug: hash-table
summary: Data structure that stores key-value pairs and allows for fast data retrieval by using a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
title: Hash Table
---

A hash table, also known as a hash map, is a fundamental data structure used in computing to implement associative arrays, a structure that can map keys to values. A hash function is used to convert the key into a computed index. This index determines where the key-value pair will be stored in the table. Ideally, the hash function distributes entries uniformly across an array of buckets, minimizing the potential for collisions—situations where two keys hash to the same index. When collisions do occur, they are resolved by techniques such as chaining (linking entries within the same bucket) or open addressing (finding another bucket within the table). Hash tables are prized for their efficiency in lookup, insertion, and deletion operations, all of which have an average time complexity of O(1) under optimal conditions.

The concept of a hash table was introduced by H. P. Luhn of IBM in 1953, and it became widely recognized and used in the 1960s as computing capabilities expanded. The data structure became essential for tasks that required quick lookup times and efficient data management.

While H. P. Luhn is credited with the initial concept, the development and refinement of hash tables have been influenced by numerous contributors over the decades. Notably, Donald Knuth, a pioneering computer scientist, significantly advanced the theoretical study of hash functions and their applications in his seminal work, _The Art of Computer Programming_.