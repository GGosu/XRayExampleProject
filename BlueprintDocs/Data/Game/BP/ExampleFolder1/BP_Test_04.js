(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BP_Test_04"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BP_Test_04",
		"path": "/Game/BP/ExampleFolder1/BP_Test_04.BP_Test_04",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [
			{
				"name": "someBadBool",
				"type": "bool",
				"default": "False",
				"public": false
			}
		],
		"functions": [
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 13,
				"localVariables": []
			}
		],
		"components": [
			{
				"name": "SCS_Components",
				"type": "SimpleConstructionScript",
				"parent": "Root"
			}
		],
		"graphs": [
			{
				"name": "EventGraph",
				"type": "EventGraph",
				"nodeCount": 43,
				"nodes": [
					{
						"guid": "1DD05AC94C40CA63248E4DAAA8A6EAF7",
						"type": "K2Node_Event",
						"title": "Event BeginPlay",
						"executionOrder": 0,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Event BeginPlay",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA15735747A3761AFC22398FA096D29E.execute"
								]
							}
						]
					},
					{
						"guid": "93BB88064BEF3F9BDBF610B07FD22C77",
						"type": "K2Node_Event",
						"title": "Event ActorBeginOverlap",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OtherActor",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "E02A7EBD4EAD52E4644BAF8CD0EB8451",
						"type": "K2Node_Event",
						"title": "Event Tick",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "DeltaSeconds",
								"type": "real",
								"direction": "Output",
								"default": "0.0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "265C85D242E961AB0296B0A38EE0F688",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": -1,
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
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A092459D4817E82E7791C9B0FABE2301.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"93F122E942A3D8C56AD6D0B0825C75E5.Array"
								]
							}
						]
					},
					{
						"guid": "93F122E942A3D8C56AD6D0B0825C75E5",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"265C85D242E961AB0296B0A38EE0F688.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A092459D4817E82E7791C9B0FABE2301.self"
								]
							}
						]
					},
					{
						"guid": "A092459D4817E82E7791C9B0FABE2301",
						"type": "K2Node_VariableSet",
						"title": "Set Tags",
						"executionOrder": -1,
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
									"265C85D242E961AB0296B0A38EE0F688.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Tags",
								"type": "name",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C2E5EBA142BD3085D4A769915B1CA5F1.Array"
								]
							},
							{
								"name": "Output_Get",
								"type": "name",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"93F122E942A3D8C56AD6D0B0825C75E5.Output"
								]
							}
						]
					},
					{
						"guid": "C2E5EBA142BD3085D4A769915B1CA5F1",
						"type": "K2Node_MakeArray",
						"title": "Make Array",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "name",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A092459D4817E82E7791C9B0FABE2301.Tags"
								]
							},
							{
								"name": "[0]",
								"type": "name",
								"direction": "Input",
								"default": "test",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "CA15735747A3761AFC22398FA096D29E",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1DD05AC94C40CA63248E4DAAA8A6EAF7.then"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"174DB4514D96CA9DC7C78FAE37C7A082.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3C5F44F44C69EF0FDDEC92BFA06E7E6A.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3104F5C1402B2B0B3BC15384106ACA14.execute"
								]
							}
						]
					},
					{
						"guid": "174DB4514D96CA9DC7C78FAE37C7A082",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 24,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA15735747A3761AFC22398FA096D29E.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"3C5F44F44C69EF0FDDEC92BFA06E7E6A.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"CA15735747A3761AFC22398FA096D29E.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"174DB4514D96CA9DC7C78FAE37C7A082.InString"
								]
							}
						]
					},
					{
						"guid": "3104F5C1402B2B0B3BC15384106ACA14",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 2,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA15735747A3761AFC22398FA096D29E.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3DF347C74F7F79564FD324A23718D529.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3EE7CF9D436D23A53ED9C58AA0489861.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DFC0BB3149FE393B48189B8654ACFA52.execute"
								]
							}
						]
					},
					{
						"guid": "3DF347C74F7F79564FD324A23718D529",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 23,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3104F5C1402B2B0B3BC15384106ACA14.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"3EE7CF9D436D23A53ED9C58AA0489861.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "3EE7CF9D436D23A53ED9C58AA0489861",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"3104F5C1402B2B0B3BC15384106ACA14.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3DF347C74F7F79564FD324A23718D529.InString"
								]
							}
						]
					},
					{
						"guid": "DFC0BB3149FE393B48189B8654ACFA52",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 3,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3104F5C1402B2B0B3BC15384106ACA14.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"643B87234467ECF39257C8A83AFE8667.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"42B703644EBCBC7B0E80CE8396401F64.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BCC540FF442603A7BF83A69E1B15CD03.execute"
								]
							}
						]
					},
					{
						"guid": "643B87234467ECF39257C8A83AFE8667",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 22,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DFC0BB3149FE393B48189B8654ACFA52.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"42B703644EBCBC7B0E80CE8396401F64.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "42B703644EBCBC7B0E80CE8396401F64",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"DFC0BB3149FE393B48189B8654ACFA52.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"643B87234467ECF39257C8A83AFE8667.InString"
								]
							}
						]
					},
					{
						"guid": "BCC540FF442603A7BF83A69E1B15CD03",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 4,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DFC0BB3149FE393B48189B8654ACFA52.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0D489A76460AC76E554A6A9DBCA3C51F.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E9A2CFEF4A4156D2DA3BB79A31E24620.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8628020F45563FA25F8805BAC2A5DC4D.execute"
								]
							}
						]
					},
					{
						"guid": "0D489A76460AC76E554A6A9DBCA3C51F",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 21,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BCC540FF442603A7BF83A69E1B15CD03.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"E9A2CFEF4A4156D2DA3BB79A31E24620.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"BCC540FF442603A7BF83A69E1B15CD03.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"0D489A76460AC76E554A6A9DBCA3C51F.InString"
								]
							}
						]
					},
					{
						"guid": "8628020F45563FA25F8805BAC2A5DC4D",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 5,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BCC540FF442603A7BF83A69E1B15CD03.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9D69D42E4C6D0B52305A58A47FBFB465.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CC8A8CA74E0B7CE02D0B17B254EF81CE.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AFE837844D87807FF1A6218734A580B4.execute"
								]
							}
						]
					},
					{
						"guid": "9D69D42E4C6D0B52305A58A47FBFB465",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 20,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8628020F45563FA25F8805BAC2A5DC4D.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"CC8A8CA74E0B7CE02D0B17B254EF81CE.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"8628020F45563FA25F8805BAC2A5DC4D.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9D69D42E4C6D0B52305A58A47FBFB465.InString"
								]
							}
						]
					},
					{
						"guid": "AFE837844D87807FF1A6218734A580B4",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 6,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8628020F45563FA25F8805BAC2A5DC4D.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8525CAD84744F56CC695748A323D9E75.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4BF6178745F75DA08EA8F1898EA5F9A9.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AA1AD18D4017BD4E37D543961FC6F832.execute"
								]
							}
						]
					},
					{
						"guid": "8525CAD84744F56CC695748A323D9E75",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 19,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AFE837844D87807FF1A6218734A580B4.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"4BF6178745F75DA08EA8F1898EA5F9A9.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "4BF6178745F75DA08EA8F1898EA5F9A9",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"AFE837844D87807FF1A6218734A580B4.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"8525CAD84744F56CC695748A323D9E75.InString"
								]
							}
						]
					},
					{
						"guid": "AA1AD18D4017BD4E37D543961FC6F832",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 7,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AFE837844D87807FF1A6218734A580B4.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CF8AB3194A0D9FEA0EF85DB0BC5832B4.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3A3C62ED4905906ACB8592BCAD0F8703.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A9AD044C43EB18E09044678169B5285E.execute"
								]
							}
						]
					},
					{
						"guid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 18,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AA1AD18D4017BD4E37D543961FC6F832.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"3A3C62ED4905906ACB8592BCAD0F8703.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "3A3C62ED4905906ACB8592BCAD0F8703",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"AA1AD18D4017BD4E37D543961FC6F832.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CF8AB3194A0D9FEA0EF85DB0BC5832B4.InString"
								]
							}
						]
					},
					{
						"guid": "A9AD044C43EB18E09044678169B5285E",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 8,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AA1AD18D4017BD4E37D543961FC6F832.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C136CF804819EC6492AC5C94336F0ABC.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"490B46FC40511DAFB234C6818E8CB0E9.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E7D755F14C77D67944BB0E9739D98811.execute"
								]
							}
						]
					},
					{
						"guid": "C136CF804819EC6492AC5C94336F0ABC",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 17,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A9AD044C43EB18E09044678169B5285E.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"490B46FC40511DAFB234C6818E8CB0E9.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "490B46FC40511DAFB234C6818E8CB0E9",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"A9AD044C43EB18E09044678169B5285E.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C136CF804819EC6492AC5C94336F0ABC.InString"
								]
							}
						]
					},
					{
						"guid": "E7D755F14C77D67944BB0E9739D98811",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 9,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"A9AD044C43EB18E09044678169B5285E.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EC8E8F4242F6E6A8EDA5A49F5D2A168B.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"915000084D5D1092095BCBB958501184.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F46F665245B7BACD34B32E8A2B65B601.execute"
								]
							}
						]
					},
					{
						"guid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 16,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E7D755F14C77D67944BB0E9739D98811.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"915000084D5D1092095BCBB958501184.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "915000084D5D1092095BCBB958501184",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"E7D755F14C77D67944BB0E9739D98811.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EC8E8F4242F6E6A8EDA5A49F5D2A168B.InString"
								]
							}
						]
					},
					{
						"guid": "F46F665245B7BACD34B32E8A2B65B601",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 10,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"E7D755F14C77D67944BB0E9739D98811.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DF97EEFC4B0EE627CCA6929BE189BBD2.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"37F8B1BC43E98363242CDCB8FE1EF28E.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"643809B04073919257EBBCB300E24FDB.execute"
								]
							}
						]
					},
					{
						"guid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 15,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F46F665245B7BACD34B32E8A2B65B601.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"37F8B1BC43E98363242CDCB8FE1EF28E.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "37F8B1BC43E98363242CDCB8FE1EF28E",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"F46F665245B7BACD34B32E8A2B65B601.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"DF97EEFC4B0EE627CCA6929BE189BBD2.InString"
								]
							}
						]
					},
					{
						"guid": "643809B04073919257EBBCB300E24FDB",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 11,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"F46F665245B7BACD34B32E8A2B65B601.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2FBF08254BD0F71CF5D624BD6B423366.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3384079943F6DA58DB792B983BE227AA.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"80B415E9426B3F6D5E5FA1B1D9D9FC6F.execute"
								]
							}
						]
					},
					{
						"guid": "2FBF08254BD0F71CF5D624BD6B423366",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 14,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"643809B04073919257EBBCB300E24FDB.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"3384079943F6DA58DB792B983BE227AA.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "3384079943F6DA58DB792B983BE227AA",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"643809B04073919257EBBCB300E24FDB.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2FBF08254BD0F71CF5D624BD6B423366.InString"
								]
							}
						]
					},
					{
						"guid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 12,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"643809B04073919257EBBCB300E24FDB.Completed"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "10",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"99825C90482F76334699C18BFF7EE135.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"724DC84C41EEF03F6903B88C0835F7B5.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "99825C90482F76334699C18BFF7EE135",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 13,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"80B415E9426B3F6D5E5FA1B1D9D9FC6F.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"724DC84C41EEF03F6903B88C0835F7B5.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "724DC84C41EEF03F6903B88C0835F7B5",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"80B415E9426B3F6D5E5FA1B1D9D9FC6F.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"99825C90482F76334699C18BFF7EE135.InString"
								]
							}
						]
					}
				],
				"entryNodes": [
					"1DD05AC94C40CA63248E4DAAA8A6EAF7"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "1DD05AC94C40CA63248E4DAAA8A6EAF7",
						"toNodeGuid": "CA15735747A3761AFC22398FA096D29E",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
						"toNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
						"toNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
						"toNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
						"toNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
						"toNodeGuid": "AFE837844D87807FF1A6218734A580B4",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
						"toNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
						"toNodeGuid": "A9AD044C43EB18E09044678169B5285E",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
						"toNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
						"toNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
						"toNodeGuid": "643809B04073919257EBBCB300E24FDB",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
						"toNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
						"fromPin": "Completed",
						"toPin": "execute",
						"edgeType": "loop_completed"
					},
					{
						"fromNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
						"toNodeGuid": "99825C90482F76334699C18BFF7EE135",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
						"toNodeGuid": "2FBF08254BD0F71CF5D624BD6B423366",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
						"toNodeGuid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
						"toNodeGuid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
						"toNodeGuid": "C136CF804819EC6492AC5C94336F0ABC",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
						"toNodeGuid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
						"toNodeGuid": "8525CAD84744F56CC695748A323D9E75",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
						"toNodeGuid": "9D69D42E4C6D0B52305A58A47FBFB465",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
						"toNodeGuid": "0D489A76460AC76E554A6A9DBCA3C51F",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
						"toNodeGuid": "643B87234467ECF39257C8A83AFE8667",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
						"toNodeGuid": "3DF347C74F7F79564FD324A23718D529",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
						"toNodeGuid": "174DB4514D96CA9DC7C78FAE37C7A082",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "265C85D242E961AB0296B0A38EE0F688",
						"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "265C85D242E961AB0296B0A38EE0F688",
						"toNodeGuid": "93F122E942A3D8C56AD6D0B0825C75E5",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "C2E5EBA142BD3085D4A769915B1CA5F1",
						"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
						"fromPin": "Array",
						"toPin": "Tags",
						"dataType": "name",
						"value": "Tags"
					},
					{
						"fromNodeGuid": "93F122E942A3D8C56AD6D0B0825C75E5",
						"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
						"fromPin": "Output",
						"toPin": "self",
						"dataType": "object",
						"value": "Tags"
					},
					{
						"fromNodeGuid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
						"toNodeGuid": "174DB4514D96CA9DC7C78FAE37C7A082",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
						"toNodeGuid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "3EE7CF9D436D23A53ED9C58AA0489861",
						"toNodeGuid": "3DF347C74F7F79564FD324A23718D529",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
						"toNodeGuid": "3EE7CF9D436D23A53ED9C58AA0489861",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "42B703644EBCBC7B0E80CE8396401F64",
						"toNodeGuid": "643B87234467ECF39257C8A83AFE8667",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
						"toNodeGuid": "42B703644EBCBC7B0E80CE8396401F64",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
						"toNodeGuid": "0D489A76460AC76E554A6A9DBCA3C51F",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
						"toNodeGuid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
						"toNodeGuid": "9D69D42E4C6D0B52305A58A47FBFB465",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
						"toNodeGuid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "4BF6178745F75DA08EA8F1898EA5F9A9",
						"toNodeGuid": "8525CAD84744F56CC695748A323D9E75",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
						"toNodeGuid": "4BF6178745F75DA08EA8F1898EA5F9A9",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "3A3C62ED4905906ACB8592BCAD0F8703",
						"toNodeGuid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
						"toNodeGuid": "3A3C62ED4905906ACB8592BCAD0F8703",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "490B46FC40511DAFB234C6818E8CB0E9",
						"toNodeGuid": "C136CF804819EC6492AC5C94336F0ABC",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
						"toNodeGuid": "490B46FC40511DAFB234C6818E8CB0E9",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "915000084D5D1092095BCBB958501184",
						"toNodeGuid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
						"toNodeGuid": "915000084D5D1092095BCBB958501184",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "37F8B1BC43E98363242CDCB8FE1EF28E",
						"toNodeGuid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
						"toNodeGuid": "37F8B1BC43E98363242CDCB8FE1EF28E",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "3384079943F6DA58DB792B983BE227AA",
						"toNodeGuid": "2FBF08254BD0F71CF5D624BD6B423366",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
						"toNodeGuid": "3384079943F6DA58DB792B983BE227AA",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "724DC84C41EEF03F6903B88C0835F7B5",
						"toNodeGuid": "99825C90482F76334699C18BFF7EE135",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
						"toNodeGuid": "724DC84C41EEF03F6903B88C0835F7B5",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					}
				],
				"deadCodeNodes": [
					"265C85D242E961AB0296B0A38EE0F688",
					"A092459D4817E82E7791C9B0FABE2301",
					"93F122E942A3D8C56AD6D0B0825C75E5",
					"C2E5EBA142BD3085D4A769915B1CA5F1"
				]
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "B2BD1603495C8D0D373D6896BD75E5C4",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 25,
						"isEnabled": true,
						"isEngineEvent": true,
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
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"B2BD1603495C8D0D373D6896BD75E5C4"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			}
		],
		"interfaces": [],
		"interfaceCalls": [],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "1DD05AC94C40CA63248E4DAAA8A6EAF7",
				"toNodeGuid": "CA15735747A3761AFC22398FA096D29E",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
				"toNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
				"toNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
				"toNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
				"toNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
				"toNodeGuid": "AFE837844D87807FF1A6218734A580B4",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
				"toNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
				"toNodeGuid": "A9AD044C43EB18E09044678169B5285E",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
				"toNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
				"toNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
				"toNodeGuid": "643809B04073919257EBBCB300E24FDB",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
				"toNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
				"fromPin": "Completed",
				"toPin": "execute",
				"edgeType": "loop_completed"
			},
			{
				"fromNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
				"toNodeGuid": "99825C90482F76334699C18BFF7EE135",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
				"toNodeGuid": "2FBF08254BD0F71CF5D624BD6B423366",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
				"toNodeGuid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
				"toNodeGuid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
				"toNodeGuid": "C136CF804819EC6492AC5C94336F0ABC",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
				"toNodeGuid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
				"toNodeGuid": "8525CAD84744F56CC695748A323D9E75",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
				"toNodeGuid": "9D69D42E4C6D0B52305A58A47FBFB465",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
				"toNodeGuid": "0D489A76460AC76E554A6A9DBCA3C51F",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
				"toNodeGuid": "643B87234467ECF39257C8A83AFE8667",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
				"toNodeGuid": "3DF347C74F7F79564FD324A23718D529",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
				"toNodeGuid": "174DB4514D96CA9DC7C78FAE37C7A082",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "265C85D242E961AB0296B0A38EE0F688",
				"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "265C85D242E961AB0296B0A38EE0F688",
				"toNodeGuid": "93F122E942A3D8C56AD6D0B0825C75E5",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "C2E5EBA142BD3085D4A769915B1CA5F1",
				"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
				"fromPin": "Array",
				"toPin": "Tags",
				"dataType": "name",
				"value": "Tags"
			},
			{
				"fromNodeGuid": "93F122E942A3D8C56AD6D0B0825C75E5",
				"toNodeGuid": "A092459D4817E82E7791C9B0FABE2301",
				"fromPin": "Output",
				"toPin": "self",
				"dataType": "object",
				"value": "Tags"
			},
			{
				"fromNodeGuid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
				"toNodeGuid": "174DB4514D96CA9DC7C78FAE37C7A082",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "CA15735747A3761AFC22398FA096D29E",
				"toNodeGuid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "3EE7CF9D436D23A53ED9C58AA0489861",
				"toNodeGuid": "3DF347C74F7F79564FD324A23718D529",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "3104F5C1402B2B0B3BC15384106ACA14",
				"toNodeGuid": "3EE7CF9D436D23A53ED9C58AA0489861",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "42B703644EBCBC7B0E80CE8396401F64",
				"toNodeGuid": "643B87234467ECF39257C8A83AFE8667",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "DFC0BB3149FE393B48189B8654ACFA52",
				"toNodeGuid": "42B703644EBCBC7B0E80CE8396401F64",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
				"toNodeGuid": "0D489A76460AC76E554A6A9DBCA3C51F",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "BCC540FF442603A7BF83A69E1B15CD03",
				"toNodeGuid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
				"toNodeGuid": "9D69D42E4C6D0B52305A58A47FBFB465",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "8628020F45563FA25F8805BAC2A5DC4D",
				"toNodeGuid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "4BF6178745F75DA08EA8F1898EA5F9A9",
				"toNodeGuid": "8525CAD84744F56CC695748A323D9E75",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "AFE837844D87807FF1A6218734A580B4",
				"toNodeGuid": "4BF6178745F75DA08EA8F1898EA5F9A9",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "3A3C62ED4905906ACB8592BCAD0F8703",
				"toNodeGuid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "AA1AD18D4017BD4E37D543961FC6F832",
				"toNodeGuid": "3A3C62ED4905906ACB8592BCAD0F8703",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "490B46FC40511DAFB234C6818E8CB0E9",
				"toNodeGuid": "C136CF804819EC6492AC5C94336F0ABC",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "A9AD044C43EB18E09044678169B5285E",
				"toNodeGuid": "490B46FC40511DAFB234C6818E8CB0E9",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "915000084D5D1092095BCBB958501184",
				"toNodeGuid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "E7D755F14C77D67944BB0E9739D98811",
				"toNodeGuid": "915000084D5D1092095BCBB958501184",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "37F8B1BC43E98363242CDCB8FE1EF28E",
				"toNodeGuid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "F46F665245B7BACD34B32E8A2B65B601",
				"toNodeGuid": "37F8B1BC43E98363242CDCB8FE1EF28E",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "3384079943F6DA58DB792B983BE227AA",
				"toNodeGuid": "2FBF08254BD0F71CF5D624BD6B423366",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "643809B04073919257EBBCB300E24FDB",
				"toNodeGuid": "3384079943F6DA58DB792B983BE227AA",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "724DC84C41EEF03F6903B88C0835F7B5",
				"toNodeGuid": "99825C90482F76334699C18BFF7EE135",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "80B415E9426B3F6D5E5FA1B1D9D9FC6F",
				"toNodeGuid": "724DC84C41EEF03F6903B88C0835F7B5",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			}
		],
		"variableUsages": [
			{
				"nodeGuid": "A092459D4817E82E7791C9B0FABE2301",
				"graphName": "EventGraph",
				"variableName": "Tags",
				"isRead": false,
				"value": "Tags",
				"executionOrder": 0
			}
		],
		"functionCalls": [
			{
				"nodeGuid": "265C85D242E961AB0296B0A38EE0F688",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "174DB4514D96CA9DC7C78FAE37C7A082",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 24,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "3C5F44F44C69EF0FDDEC92BFA06E7E6A",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "3DF347C74F7F79564FD324A23718D529",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 23,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "3EE7CF9D436D23A53ED9C58AA0489861",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "643B87234467ECF39257C8A83AFE8667",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 22,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "42B703644EBCBC7B0E80CE8396401F64",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "0D489A76460AC76E554A6A9DBCA3C51F",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 21,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "E9A2CFEF4A4156D2DA3BB79A31E24620",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "9D69D42E4C6D0B52305A58A47FBFB465",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 20,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "CC8A8CA74E0B7CE02D0B17B254EF81CE",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "8525CAD84744F56CC695748A323D9E75",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 19,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "4BF6178745F75DA08EA8F1898EA5F9A9",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "CF8AB3194A0D9FEA0EF85DB0BC5832B4",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 18,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "3A3C62ED4905906ACB8592BCAD0F8703",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "C136CF804819EC6492AC5C94336F0ABC",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 17,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "490B46FC40511DAFB234C6818E8CB0E9",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "EC8E8F4242F6E6A8EDA5A49F5D2A168B",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 16,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "915000084D5D1092095BCBB958501184",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "DF97EEFC4B0EE627CCA6929BE189BBD2",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 15,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "37F8B1BC43E98363242CDCB8FE1EF28E",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "2FBF08254BD0F71CF5D624BD6B423366",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 14,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "3384079943F6DA58DB792B983BE227AA",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "99825C90482F76334699C18BFF7EE135",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 13,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "724DC84C41EEF03F6903B88C0835F7B5",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			}
		],
		"referencedBlueprints": [],
		"diagnostics": [],
		"deadCodeNodes": [
			"265C85D242E961AB0296B0A38EE0F688",
			"A092459D4817E82E7791C9B0FABE2301",
			"93F122E942A3D8C56AD6D0B0825C75E5",
			"C2E5EBA142BD3085D4A769915B1CA5F1"
		],
		"totalExecutionPaths": 25,
		"maxExecutionDepth": 13
	},
	"issues": [
		{
			"level": "error",
			"type": "Dead Code",
			"desc": "'EventGraph': 4 unreachable — Get All Actors Of Class, Set Tags, Get (a copy), Make Array",
			"rule_id": "BP-DEAD-001"
		},
		{
			"level": "warning",
			"type": "Cyclomatic Complexity",
			"desc": "Function 'ReceiveBeginPlay' has complexity 13. Consider splitting.",
			"rule_id": "BP-COMPLEX-001"
		},
		{
			"level": "warning",
			"type": "Unused Variable",
			"desc": "Variable 'someBadBool' is never read or written.",
			"rule_id": "BP-UNUSED-VAR-001"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'someBadBool' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Bool Naming",
			"desc": "Boolean variable 'someBadBool' missing 'b', 'Is', or 'Has' prefix.",
			"rule_id": "BP-NAMING-004"
		},
		{
			"level": "warning",
			"type": "Empty Tick",
			"desc": "Event Tick in 'EventGraph' has no connected logic but still runs every frame.",
			"rule_id": "BP-PERF-008"
		}
	]
};})();