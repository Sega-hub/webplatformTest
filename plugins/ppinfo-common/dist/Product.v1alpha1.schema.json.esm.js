var $schema = "http://json-schema.org/draft-07/schema";
var $id = "ProductV1alpha1";
var description = "MTS Product entity schema";
var examples = [
	{
		apiVersion: "mts.ru/v1alpha1",
		kind: "Product",
		metadata: {
			name: "ppinfo-product",
			title: "My Product",
			description: "Self-service customer portal",
			tags: [
				"internal"
			],
			labels: {
				product_name: "BI_2444"
			},
			annotations: {
				docs: "https://github.com/..../tree/develop/doc"
			}
		},
		spec: {
			owner: "team-a",
			code: "BI_3535",
			type: "internal"
		}
	}
];
var allOf = [
	{
		$ref: "Entity"
	},
	{
		type: "object",
		required: [
			"spec"
		],
		properties: {
			apiVersion: {
				"enum": [
					"mts.ru/v1alpha1"
				]
			},
			kind: {
				"enum": [
					"Product"
				]
			},
			spec: {
				type: "object",
				required: [
					"owner",
					"code"
				],
				properties: {
					type: {
						type: "string",
						description: "The type of the product",
						examples: [
							"internal"
						],
						minLength: 1
					},
					owner: {
						type: "string",
						description: "The user (or group) owner of the product",
						minLength: 1
					},
					code: {
						type: "string",
						description: "The product code as per PLM (PPInfo)",
						minLength: 1
					}
				}
			}
		}
	}
];
var schema = {
	$schema: $schema,
	$id: $id,
	description: description,
	examples: examples,
	allOf: allOf
};

export { $id, $schema, allOf, schema as default, description, examples };
//# sourceMappingURL=Product.v1alpha1.schema.json.esm.js.map
