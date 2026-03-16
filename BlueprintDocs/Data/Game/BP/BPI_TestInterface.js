(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BPI_TestInterface"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BPI_TestInterface",
		"path": "/Game/BP/BPI_TestInterface.BPI_TestInterface",
		"parentClass": "Interface",
		"parentClassPath": "/Script/CoreUObject.Interface",
		"parentIsNative": true,
		"variables": [],
		"functions": [
			{
				"name": "isOk",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [
					"bSuccess: bool"
				],
				"isNative": false,
				"isEvent": false,
				"complexityScore": 1,
				"localVariables": []
			}
		],
		"components": [],
		"graphs": [
			{
				"name": "isOk",
				"type": "FunctionGraph",
				"nodeCount": 2,
				"nodes": [
					{
						"guid": "25F29ACC4AC05DFBD62DD791050DD376",
						"type": "K2Node_FunctionEntry",
						"title": "Is Ok",
						"executionOrder": 0,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C94C344646F8A387DFC62893B13F23FD.execute"
								]
							}
						]
					},
					{
						"guid": "C94C344646F8A387DFC62893B13F23FD",
						"type": "K2Node_FunctionResult",
						"title": "Return Node",
						"executionOrder": 1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"25F29ACC4AC05DFBD62DD791050DD376.then"
								]
							},
							{
								"name": "bSuccess",
								"type": "bool",
								"direction": "Input",
								"default": "false",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"25F29ACC4AC05DFBD62DD791050DD376"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "25F29ACC4AC05DFBD62DD791050DD376",
						"toNodeGuid": "C94C344646F8A387DFC62893B13F23FD",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [],
				"deadCodeNodes": []
			}
		],
		"interfaces": [],
		"interfaceCalls": [],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "25F29ACC4AC05DFBD62DD791050DD376",
				"toNodeGuid": "C94C344646F8A387DFC62893B13F23FD",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [],
		"variableUsages": [],
		"functionCalls": [],
		"referencedBlueprints": [],
		"diagnostics": [],
		"deadCodeNodes": [],
		"totalExecutionPaths": 1,
		"maxExecutionDepth": 1
	},
	"issues": [
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Asset 'BPI_TestInterface' should start with 'BI_'.",
			"rule_id": "BP-NAMING-001"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'isOk' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		}
	]
};})();