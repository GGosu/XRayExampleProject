(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["BP_Test_03"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "BP_Test_03",
		"path": "/Game/BP/ExampleFolder1/BP_Test_03.BP_Test_03",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [],
		"functions": [
			{
				"name": "someDeadCodeFunction",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [
					"someInt: int",
					"someOutput: int",
					"someLocalVariable: int",
					"someBadLocalBool: bool"
				],
				"isNative": false,
				"isEvent": false,
				"complexityScore": 1,
				"localVariables": [
					{
						"name": "someBadLocalBool",
						"type": "bool",
						"default": ""
					},
					{
						"name": "someLocalVariable",
						"type": "int",
						"default": "0"
					}
				]
			},
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "ReceiveTick",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [
					"DeltaSeconds: float"
				],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
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
				"nodeCount": 8,
				"nodes": [
					{
						"guid": "D5D027AC40F33365EEE4F0ADF779AD86",
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
									"7D0EAEC848A3A0B740DF3888BB0E1BF0.execute"
								]
							}
						]
					},
					{
						"guid": "CD239D564CA4F89A011DB58713F94DBB",
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
						"guid": "B94034364C2572501E7E629DC49496B7",
						"type": "K2Node_Event",
						"title": "Event Tick",
						"executionOrder": 3,
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
							"functionName": "Event Tick",
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
									"62D6D2C14A245BADF7E80B83A999577E.execute"
								]
							},
							{
								"name": "DeltaSeconds",
								"type": "real",
								"direction": "Output",
								"default": "0.0",
								"isOrphaned": false,
								"linked": [
									"E29758954A3710A886C7CC95467BFE21.InDouble"
								]
							}
						]
					},
					{
						"guid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
						"type": "K2Node_CallFunction",
						"title": "Some Dead Code Function",
						"executionOrder": 1,
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
							"functionName": "someDeadCodeFunction",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"someInt: 3"
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
									"D5D027AC40F33365EEE4F0ADF779AD86.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"71C5225D4C251F4FED70F9A27C621CC6.execute"
								]
							},
							{
								"name": "someInt",
								"type": "int",
								"direction": "Input",
								"default": "3",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "someOutput",
								"type": "int",
								"direction": "Output",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"D9C10802403BA10F1E7E79BFD41A9854.InInt"
								]
							}
						]
					},
					{
						"guid": "71C5225D4C251F4FED70F9A27C621CC6",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 2,
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
									"7D0EAEC848A3A0B740DF3888BB0E1BF0.then"
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
									"D9C10802403BA10F1E7E79BFD41A9854.ReturnValue"
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
						"guid": "D9C10802403BA10F1E7E79BFD41A9854",
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
									"7D0EAEC848A3A0B740DF3888BB0E1BF0.someOutput"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"71C5225D4C251F4FED70F9A27C621CC6.InString"
								]
							}
						]
					},
					{
						"guid": "62D6D2C14A245BADF7E80B83A999577E",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 4,
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
								"InString: Conv_DoubleToString()",
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
									"B94034364C2572501E7E629DC49496B7.then"
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
									"E29758954A3710A886C7CC95467BFE21.ReturnValue"
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
						"guid": "E29758954A3710A886C7CC95467BFE21",
						"type": "K2Node_CallFunction",
						"title": "To String (Float)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InDouble",
								"type": "real",
								"direction": "Input",
								"default": "0.0",
								"isOrphaned": false,
								"linked": [
									"B94034364C2572501E7E629DC49496B7.DeltaSeconds"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"62D6D2C14A245BADF7E80B83A999577E.InString"
								]
							}
						]
					}
				],
				"entryNodes": [
					"D5D027AC40F33365EEE4F0ADF779AD86",
					"B94034364C2572501E7E629DC49496B7"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "D5D027AC40F33365EEE4F0ADF779AD86",
						"toNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
						"toNodeGuid": "71C5225D4C251F4FED70F9A27C621CC6",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "B94034364C2572501E7E629DC49496B7",
						"toNodeGuid": "62D6D2C14A245BADF7E80B83A999577E",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "D9C10802403BA10F1E7E79BFD41A9854",
						"toNodeGuid": "71C5225D4C251F4FED70F9A27C621CC6",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
						"toNodeGuid": "D9C10802403BA10F1E7E79BFD41A9854",
						"fromPin": "someOutput",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "E29758954A3710A886C7CC95467BFE21",
						"toNodeGuid": "62D6D2C14A245BADF7E80B83A999577E",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "B94034364C2572501E7E629DC49496B7",
						"toNodeGuid": "E29758954A3710A886C7CC95467BFE21",
						"fromPin": "DeltaSeconds",
						"toPin": "InDouble",
						"dataType": "real",
						"value": "Conv_DoubleToString()"
					}
				],
				"deadCodeNodes": []
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "DF37774D4F8D385DF889FD8B3675B83B",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 5,
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
					"DF37774D4F8D385DF889FD8B3675B83B"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			},
			{
				"name": "someDeadCodeFunction",
				"type": "FunctionGraph",
				"nodeCount": 5,
				"nodes": [
					{
						"guid": "C11BF1D54D1107B73235D1848019E386",
						"type": "K2Node_FunctionEntry",
						"title": "Some Dead Code Function",
						"executionOrder": 6,
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
									"D757214D45106A949CE357AE974E5A2E.execute"
								]
							},
							{
								"name": "someInt",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"30A57D4B4B75BFE25F50BC887F80202C.A"
								]
							}
						]
					},
					{
						"guid": "30A57D4B4B75BFE25F50BC887F80202C",
						"type": "K2Node_PromotableOperator",
						"title": "integer >= integer",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "A",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C11BF1D54D1107B73235D1848019E386.someInt"
								]
							},
							{
								"name": "B",
								"type": "int",
								"direction": "Input",
								"default": "5",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "bool",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"AC97CFC14E95EBFEF19C6D987C2DC3D4.bPickA"
								]
							}
						]
					},
					{
						"guid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
						"type": "K2Node_CallFunction",
						"title": "Select Int",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "A",
								"type": "int",
								"direction": "Input",
								"default": "77",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "B",
								"type": "int",
								"direction": "Input",
								"default": "88",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPickA",
								"type": "bool",
								"direction": "Input",
								"default": "false",
								"isOrphaned": false,
								"linked": [
									"30A57D4B4B75BFE25F50BC887F80202C.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Output",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"D757214D45106A949CE357AE974E5A2E.someLocalVariable"
								]
							}
						]
					},
					{
						"guid": "D757214D45106A949CE357AE974E5A2E",
						"type": "K2Node_VariableSet",
						"title": "Set someLocalVariable",
						"executionOrder": 7,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "variable",
							"operation": "set",
							"conditionExpression": "",
							"variableName": "someLocalVariable",
							"functionName": "",
							"literalValue": "SelectInt()",
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
									"C11BF1D54D1107B73235D1848019E386.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"318C8D2047BAC60EB5D7E59F7106A6AA.execute"
								]
							},
							{
								"name": "someLocalVariable",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"AC97CFC14E95EBFEF19C6D987C2DC3D4.ReturnValue"
								]
							},
							{
								"name": "Output_Get",
								"type": "int",
								"direction": "Output",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "318C8D2047BAC60EB5D7E59F7106A6AA",
						"type": "K2Node_FunctionResult",
						"title": "Return Node",
						"executionOrder": 8,
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
									"D757214D45106A949CE357AE974E5A2E.then"
								]
							},
							{
								"name": "someOutput",
								"type": "int",
								"direction": "Input",
								"default": "44",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"C11BF1D54D1107B73235D1848019E386"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "C11BF1D54D1107B73235D1848019E386",
						"toNodeGuid": "D757214D45106A949CE357AE974E5A2E",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "D757214D45106A949CE357AE974E5A2E",
						"toNodeGuid": "318C8D2047BAC60EB5D7E59F7106A6AA",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "C11BF1D54D1107B73235D1848019E386",
						"toNodeGuid": "30A57D4B4B75BFE25F50BC887F80202C",
						"fromPin": "someInt",
						"toPin": "A",
						"dataType": "int",
						"value": "GreaterEqual_IntInt()"
					},
					{
						"fromNodeGuid": "30A57D4B4B75BFE25F50BC887F80202C",
						"toNodeGuid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
						"fromPin": "ReturnValue",
						"toPin": "bPickA",
						"dataType": "bool",
						"value": "SelectInt()"
					},
					{
						"fromNodeGuid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
						"toNodeGuid": "D757214D45106A949CE357AE974E5A2E",
						"fromPin": "ReturnValue",
						"toPin": "someLocalVariable",
						"dataType": "int",
						"value": "someLocalVariable"
					}
				],
				"deadCodeNodes": [
					"D757214D45106A949CE357AE974E5A2E",
					"AC97CFC14E95EBFEF19C6D987C2DC3D4",
					"30A57D4B4B75BFE25F50BC887F80202C"
				]
			}
		],
		"interfaces": [],
		"interfaceCalls": [],
		"dispatchers": [],
		"executionEdges": [
			{
				"fromNodeGuid": "D5D027AC40F33365EEE4F0ADF779AD86",
				"toNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
				"toNodeGuid": "71C5225D4C251F4FED70F9A27C621CC6",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "B94034364C2572501E7E629DC49496B7",
				"toNodeGuid": "62D6D2C14A245BADF7E80B83A999577E",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "C11BF1D54D1107B73235D1848019E386",
				"toNodeGuid": "D757214D45106A949CE357AE974E5A2E",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "D757214D45106A949CE357AE974E5A2E",
				"toNodeGuid": "318C8D2047BAC60EB5D7E59F7106A6AA",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "D9C10802403BA10F1E7E79BFD41A9854",
				"toNodeGuid": "71C5225D4C251F4FED70F9A27C621CC6",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
				"toNodeGuid": "D9C10802403BA10F1E7E79BFD41A9854",
				"fromPin": "someOutput",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "E29758954A3710A886C7CC95467BFE21",
				"toNodeGuid": "62D6D2C14A245BADF7E80B83A999577E",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "B94034364C2572501E7E629DC49496B7",
				"toNodeGuid": "E29758954A3710A886C7CC95467BFE21",
				"fromPin": "DeltaSeconds",
				"toPin": "InDouble",
				"dataType": "real",
				"value": "Conv_DoubleToString()"
			},
			{
				"fromNodeGuid": "C11BF1D54D1107B73235D1848019E386",
				"toNodeGuid": "30A57D4B4B75BFE25F50BC887F80202C",
				"fromPin": "someInt",
				"toPin": "A",
				"dataType": "int",
				"value": "GreaterEqual_IntInt()"
			},
			{
				"fromNodeGuid": "30A57D4B4B75BFE25F50BC887F80202C",
				"toNodeGuid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
				"fromPin": "ReturnValue",
				"toPin": "bPickA",
				"dataType": "bool",
				"value": "SelectInt()"
			},
			{
				"fromNodeGuid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
				"toNodeGuid": "D757214D45106A949CE357AE974E5A2E",
				"fromPin": "ReturnValue",
				"toPin": "someLocalVariable",
				"dataType": "int",
				"value": "someLocalVariable"
			}
		],
		"variableUsages": [
			{
				"nodeGuid": "D757214D45106A949CE357AE974E5A2E",
				"graphName": "someDeadCodeFunction",
				"variableName": "someLocalVariable",
				"isRead": false,
				"value": "SelectInt()",
				"executionOrder": 7
			}
		],
		"functionCalls": [
			{
				"nodeGuid": "7D0EAEC848A3A0B740DF3888BB0E1BF0",
				"graphName": "EventGraph",
				"functionName": "someDeadCodeFunction",
				"returnValue": "used",
				"executionOrder": 1,
				"arguments": [
					"someInt: 3"
				]
			},
			{
				"nodeGuid": "71C5225D4C251F4FED70F9A27C621CC6",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 2,
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
				"nodeGuid": "D9C10802403BA10F1E7E79BFD41A9854",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: someDeadCodeFunction()"
				]
			},
			{
				"nodeGuid": "62D6D2C14A245BADF7E80B83A999577E",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 4,
				"arguments": [
					"InString: Conv_DoubleToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "E29758954A3710A886C7CC95467BFE21",
				"graphName": "EventGraph",
				"functionName": "Conv_DoubleToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InDouble: Conv_DoubleToString()"
				]
			},
			{
				"nodeGuid": "30A57D4B4B75BFE25F50BC887F80202C",
				"graphName": "someDeadCodeFunction",
				"functionName": "GreaterEqual_IntInt",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"A: GreaterEqual_IntInt()",
					"B: 5"
				]
			},
			{
				"nodeGuid": "AC97CFC14E95EBFEF19C6D987C2DC3D4",
				"graphName": "someDeadCodeFunction",
				"functionName": "SelectInt",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"A: 77",
					"B: 88",
					"bPickA: GreaterEqual_IntInt()"
				]
			}
		],
		"referencedBlueprints": [],
		"diagnostics": [],
		"deadCodeNodes": [
			"D757214D45106A949CE357AE974E5A2E",
			"AC97CFC14E95EBFEF19C6D987C2DC3D4",
			"30A57D4B4B75BFE25F50BC887F80202C"
		],
		"totalExecutionPaths": 5,
		"maxExecutionDepth": 2
	},
	"issues": [
		{
			"level": "error",
			"type": "Dead Code",
			"desc": "'someDeadCodeFunction': 3 unreachable — Set someLocalVariable, Select Int, integer >= integer",
			"rule_id": "BP-DEAD-001"
		},
		{
			"level": "warning",
			"type": "Unused Variable",
			"desc": "Local variable 'someBadLocalBool' in 'someDeadCodeFunction' is never used.",
			"rule_id": "BP-UNUSED-VAR-001"
		},
		{
			"level": "warning",
			"type": "Write-only Variable",
			"desc": "Local variable 'someLocalVariable' in 'someDeadCodeFunction' is set but never read. The value is discarded.",
			"rule_id": "BP-VAR-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'someDeadCodeFunction' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Local variable 'someBadLocalBool' in 'someDeadCodeFunction' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Local variable 'someLocalVariable' in 'someDeadCodeFunction' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Bool Naming",
			"desc": "Local boolean variable 'someBadLocalBool' in 'someDeadCodeFunction' missing 'b', 'Is', or 'Has' prefix.",
			"rule_id": "BP-NAMING-004"
		},
		{
			"level": "info",
			"type": "Print String on Tick",
			"desc": "Print String on Tick path in 'EventGraph' — debug output every frame: Print String",
			"rule_id": "BP-PERF-006"
		}
	]
};})();