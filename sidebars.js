module.exports = {
	someSidebar: [
		{
			type: "category",
			label: "Getting Started",
			collapsed: false,
			items: [
				{
					type: "doc",
					id: "intro/introduction",
					label: "Introduction",
				},
				"intro/how-it-works",
				"intro/quickstart",
				"intro/glossary",
			],
		},

		{
			type: "category",
			label: "Contember Admin",
			collapsed: false,
			link: {
				type: 'generated-index',
				title: 'Admin',
			},
			items: [
				'reference/admin/introduction',
				'reference/admin/pages/defining-pages',
				'reference/admin/pages/links',
				'reference/admin/data-binding/overview',
				'reference/admin/data-binding/query-language',
				{
					type: "category",
					label: "Components",
					collapsed: false,
					items: [
						'reference/admin/components/value-rendering',
						'reference/admin/components/relationship-components',
						'reference/admin/components/inputs',
						'reference/admin/components/select-field',
						'reference/admin/components/custom-components',
					],
				},
				{
					type: "category",
					label: "Theming",
					items: [
						"reference/admin/theming/introduction",
						"reference/admin/theming/pallettes",
					],
				},
				{
					type: "category",
					label: "API reference",
					items: [
						{
							type: "category",
							label: "Components",
							items: [
								{
									type: "autogenerated",
									dirName: "reference/admin/api/components",
								},
							],
						},
						{
							type: "category",
							label: "UI components",
							items: [
								{
									type: "autogenerated",
									dirName: "reference/admin/api/components-ui",
								},
							],
						},
						{
							type: "category",
							label: "Binding",
							items: [
								{
									type: "autogenerated",
									dirName: "reference/admin/api/binding",
								},
							],
						},
					],
				},
				{
					type: "category",
					label: "Releases",
					items: [
						{
							type: "autogenerated",
							dirName: "reference/admin/releases",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Contember Engine",
			collapsed: false,
			link: {
				type: 'generated-index',
				title: 'Engine',
			},
			items: [
				{
					type: "category",
					label: "Schema",
					collapsed: false,
					items: [
						"reference/engine/schema/overview",
						"reference/engine/schema/columns",
						"reference/engine/schema/relationships",
						"reference/engine/schema/migrations",
						"reference/engine/schema/acl",
						"reference/engine/schema/validations",
					],
				},
				{
					type: "category",
					label: "Content API",
					items: [
						"reference/engine/content/overview",
						"reference/engine/content/queries",
						"reference/engine/content/mutations",
						"reference/engine/content/s3",
						"reference/engine/content/event-log",
						"reference/engine/content/transfer",
						{
							type: "category",
							label: "Advanced",
							items: [
								"reference/engine/content/advanced/assume-identity",
								"reference/engine/content/advanced/assume-membership",
								"reference/engine/content/advanced/request-debugging",
								"reference/engine/content/advanced/caching",
							]
						}
					],
				},
				{
					type: "category",
					label: "Tenant API",
					items: [
						"reference/engine/tenant/overview",
						"reference/engine/tenant/users",
						"reference/engine/tenant/memberships",
						"reference/engine/tenant/api-keys",
						"reference/engine/tenant/idp",
					],
				},
			]
		},
		'reference/cli',
		{
			type: "category",
			label: "Guides",
			collapsed: false,
			link: {
				type: 'generated-index',
				title: 'Guides',
			},
			items: [
				"guides/deploy-contember",
				"guides/deploy-github-actions",
				"guides/self-hosted-contember",
				'guides/seo',
				'guides/acl-definition',
			],
		},
		{
			type: "category",
			label: "Starter kits",
			collapsed: true,
			items: [
				{
					type: "autogenerated",
					dirName: "starter-kits",
				},
			],
		},
	],
}
